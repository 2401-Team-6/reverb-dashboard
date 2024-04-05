import { TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";
import { ApiResponse } from "../types/types";

export default function SearchBar(props: {
  entries: ApiResponse;
  setFilteredEntries: React.Dispatch<React.SetStateAction<ApiResponse>>;
}) {
  const [search, setSearch] = useState<string>("");

  function filterEntries(filter: string) {
    function getSearchableValues(arg: unknown): any {
      if (Array.isArray(arg)) {
        return arg.map(getSearchableValues);
      } else if (!!arg && typeof arg === "object") {
        return Object.keys(arg)
          .map(getSearchableValues)
          .concat(Object.values(arg).map(getSearchableValues));
      } else {
        return arg;
      }
    }

    let searchableValues = getSearchableValues(props.entries.logs);
    searchableValues = searchableValues.map((entry: unknown[]) => {
      while (entry.some((elem: unknown) => Array.isArray(elem))) {
        entry = entry.flat();
      }
      return entry;
    });

    props.setFilteredEntries(() => {
      return {
        logs: props.entries.logs.filter((_log: unknown, i: number) => {
          return searchableValues[i].some((val: unknown) => {
            return String(val).match(new RegExp(filter || "", "i"));
          });
        }),
      };
    });
  }

  useEffect(() => {
    filterEntries(search);
  }, [search, props.entries]);

  return (
    <TextInput
      icon={HiSearch}
      color="reverb"
      className="relative z-20 w-[calc(100%-3.5rem)]"
      onChange={(e) => setSearch(e.target.value)}
      value={search}
    />
  );
}
