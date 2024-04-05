import { Sidebar, Tabs } from "flowbite-react";
import LogJsonViewer from "./LogJsonViewer";
import LogTable from "./LogTable";
import { Scrollbar } from "react-scrollbars-custom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DotDivider from "./DotDivider";
import { ApiResponse } from "../types/types";
import axios from "axios";

export default function LogInfoWindow(props: { entries: ApiResponse }) {
  const url = useLocation();
  const [selectedLog, setSelectedLog] = useState<{ [key: string]: any }>();
  const [additionalLogs, setAdditionalLogs] = useState<ApiResponse>();

  useEffect(() => {
    let pathSegments = url.pathname.split("/");

    setSelectedLog(() => {
      return props.entries.logs.find((log: { [key: string]: any }) => {
        return (
          log.function?._id === pathSegments[pathSegments.length - 1] ||
          log.event?._id === pathSegments[pathSegments.length - 1] ||
          log.error?._id === pathSegments[pathSegments.length - 1] ||
          log.function?.funcId === pathSegments[pathSegments.length - 1]
        );
      });
    });
  }, [url]);

  useEffect(() => {
    if (selectedLog?.links.logs) {
      if (!JSON.parse(localStorage.getItem("apiUrl") || "")) return;

      axios
        .get(
          JSON.parse(localStorage.getItem("apiUrl") || "") +
            selectedLog.links.logs,
          {
            headers: {
              "x-api-key": JSON.parse(localStorage.getItem("apiKey") || ""),
            },
          },
        )
        .then((res) => {
          setAdditionalLogs(res.data);
        });
    }
  }, [selectedLog]);

  return (
    <Sidebar className="w-1/2" aria-label="Default sidebar example">
      <Scrollbar className="h-full w-full">
        {selectedLog ? (
          <Tabs style="underline" className="p-[1px]">
            <Tabs.Item active title="Table">
              <LogTable
                overview={selectedLog}
                additionalLogs={additionalLogs}
              />
            </Tabs.Item>
            <Tabs.Item active title="JSON">
              <LogJsonViewer log={selectedLog} className="mb-6" />
              {additionalLogs ? (
                <>
                  <DotDivider />
                  <LogJsonViewer log={additionalLogs} className="mt-6" />
                </>
              ) : (
                <></>
              )}
            </Tabs.Item>
          </Tabs>
        ) : (
          <></>
        )}
      </Scrollbar>
    </Sidebar>
  );
}
