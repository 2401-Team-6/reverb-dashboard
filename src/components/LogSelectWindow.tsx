import { Sidebar } from "flowbite-react";
import { Scrollbar } from "react-scrollbars-custom";
import EntryStatusIndicator from "./EntryStatusIndicator";
import TimeDropdown from "./TimeDropdown";
import SearchBar from "./SearchBar";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ApiResponse } from "../types/types";
import { ScrollState } from "react-scrollbars-custom/dist/types/types";
import VirtualScrollChild from "./VirtualScrollChild";
import axios from "axios";

export default function LogSelectWindow(props: {
  entries: ApiResponse;
  setEntries: React.Dispatch<React.SetStateAction<ApiResponse>>;
}) {
  const [searchParams, _setSearchParams] = useSearchParams();
  const [filteredEntries, setFilteredEntries] = useState<ApiResponse>(
    props.entries,
  );
  const [activeEntry, setActiveEntry] = useState<string>("");
  const [nextPage, setNextPage] = useState<string>("");
  const [urlState, setUrlState] = useState<{
    path: string;
    from: string;
    to: string;
  }>({ path: "", from: "", to: "" });
  const url = useLocation();
  const [_scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("apiUrl") || "")) return;

    let pathSegments = url.pathname.split("/");
    let apiUrl = createApiUrl();

    setActiveEntry(() =>
      pathSegments.length > 2 ? pathSegments[pathSegments.length - 1] : "",
    );

    if (
      urlState.path !== (pathSegments[1] || "") ||
      urlState.from !== (searchParams.get("from") || "") ||
      urlState.to !== (searchParams.get("to") || "")
    ) {
      setUrlState({
        path: pathSegments[1] || "",
        from: searchParams.get("from") || "",
        to: searchParams.get("to") || "",
      });
      axios
        .get(apiUrl, {
          validateStatus: (status) =>
            (status >= 200 && status < 300) || status === 404,
          headers: {
            "x-api-key": localStorage.getItem("apiKey"),
          },
        })
        .then((res) => {
          setNextPage(res.data.links.next);
          props.setEntries(res.data);
        });
    }
  }, [url, searchParams]);

  useEffect(() => {
    setFilteredEntries(() => props.entries);
  }, [props.entries]);

  useEffect(() => {
    if (
      filteredEntries.logs.length * 40 <=
      Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0,
      )
    ) {
      getNextPage();
    }
  }, [filteredEntries]);

  const handleScroll = (e: ScrollState) => {
    const { scrollTop, scrollHeight, clientHeight } = e;
    const position = Math.ceil(
      (scrollTop / (scrollHeight - clientHeight)) * 100,
    );
    setScrollPosition(position);

    if (position >= 90) {
      getNextPage();
    }
  };

  function createApiUrl() {
    let apiUrl = JSON.parse(localStorage.getItem("apiUrl") || "");
    let pathSegments = url.pathname.split("/");

    pathSegments[1] === "all"
      ? (apiUrl += "/logs/")
      : (apiUrl += `/logs/${pathSegments[1]}/`);

    if (searchParams.get("from") && searchParams.get("to")) {
      apiUrl += `?startTime=${new Date(Number(searchParams.get("from"))).toISOString()}`;
      apiUrl += `&endTime=${new Date(Number(searchParams.get("to"))).toISOString()}`;
    }

    return apiUrl;
  }

  function getNextPage() {
    if (nextPage) {
      axios
        .get(JSON.parse(localStorage.getItem("apiUrl") || "") + nextPage, {
          validateStatus: (status) =>
            (status >= 200 && status < 300) || status === 404,
          headers: {
            "x-api-key": localStorage.getItem("apiKey"),
          },
        })
        .then((res) => {
          if (res.status >= 200 && res.status < 300) {
            const newLogs = res.data?.logs || [];
            setNextPage(res.data.links.next);

            props.setEntries((prevValue) => {
              const uniqueLogs = Array.from(
                new Set(
                  prevValue.logs
                    .map((log) => JSON.stringify(log))
                    .concat(newLogs.map((log: any) => JSON.stringify(log))),
                ),
              ).map((log) => JSON.parse(log));
              return { logs: uniqueLogs, links: res.data.links };
            });
          }
        });
    }
  }

  return (
    <Sidebar className="relative w-[30%]" aria-label="Default sidebar example">
      <Scrollbar
        className="h-full w-full"
        onScroll={(e) => handleScroll(e as ScrollState)}
      >
        <Sidebar.ItemGroup>
          <SearchBar
            entries={props.entries}
            setFilteredEntries={setFilteredEntries}
          />
          <TimeDropdown entries={props.entries} />
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              {filteredEntries.logs.map((log: { [key: string]: any }) => {
                const path = url.pathname.split("/")[1];

                let name;
                let resource;
                let type: "function" | "event" | "error" | undefined;
                if ("function" in log) {
                  name =
                    log.function.funcName?.slice(0, 30) ||
                    log.function.meta?.funcName?.slice(0, 30) ||
                    log.function.message ||
                    "unknown";
                  resource = log.function._id || log.function.funcId;
                  type = "function";
                } else if ("event" in log) {
                  name = log.event.meta.eventName?.slice(0, 30);
                  resource = log.event._id;
                  type = "event";
                } else if ("error" in log) {
                  name = log.error.meta.error.name.slice(0, 30);
                  resource = log.error._id;
                  type = "error";
                } else {
                  name = "Something went wrong";
                  resource = "";
                }

                return (
                  <VirtualScrollChild
                    height={40}
                    inViewRoot={undefined}
                    key={JSON.stringify(log)}
                  >
                    <Link to={`/${path}/${resource}`}>
                      <Sidebar.Item
                        href="#"
                        active={activeEntry === resource}
                        as="div"
                      >
                        {(() => {
                          return name.length === 30 ? (
                            <>{`${name}...`}</>
                          ) : (
                            <>{name}</>
                          );
                        })()}
                        {
                          <EntryStatusIndicator
                            status={
                              (activeEntry === resource
                                ? "active"
                                : undefined) || log.function?.status
                            }
                            tooltip={log.function?.status || type}
                            symbol={
                              url.pathname.split("/")[1] === "all"
                                ? type
                                : undefined
                            }
                          />
                        }
                      </Sidebar.Item>
                    </Link>
                  </VirtualScrollChild>
                );
              })}
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar.ItemGroup>
      </Scrollbar>
    </Sidebar>
  );
}
