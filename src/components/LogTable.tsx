import { Table } from "flowbite-react";
import { ApiResponse } from "../types/types";
import { MdErrorOutline } from "react-icons/md";
import DotDivider from "./DotDivider";
import StackTraceAccordion from "./StackTraceAccordion";
import LogOverviewTable from "./LogOverviewTable";
import React from "react";

const DETAIL_ENTRY_ORDER = [
  "message",
  "stepId",
  "timestamp",
  "attempts",
  "stack",
];

const ENTRY_TABLE_NAMES: { [key: string]: any } = {
  funcName: "Function Name",
  funcId: "Invocation ID",
  invoked: "Invoked",
  lastUpdate: "Last Updated",
  status: "Status",
  cron: "Cron Job?",
  eventId: "Issuing Event ID",
  attempts: "Attempt",
  message: "Message",
  timestamp: "Logged at",
  stack: "Stack trace",
  stepId: "Step ID",
};
const STYLING: { [key: string]: { [key: string]: string } } = {
  status: {
    completed: "text-green-500",
    error: "text-red-700",
    running: "text-yellow-400",
  },
};

export default function LogTable(props: {
  overview: { [key: string]: any };
  additionalLogs?: ApiResponse;
}) {
  if (props.overview.function?.status || props.overview.event) {
    return (
      <>
        <LogOverviewTable json={props.overview || { logs: [] }} />
        {props.additionalLogs ? (
          <DetailLogTables logs={props.additionalLogs.logs} />
        ) : (
          <></>
        )}
      </>
    );
  } else {
    return <LogOverviewTable json={props.overview || { logs: [] }} />;
  }
}

function DetailLogTables(props: { logs: any }) {
  return (
    <>
      <DotDivider />
      <div className="pt-8">
        {props.logs.map(
          (
            log: {
              function?: { [key: string]: any };
              error?: { [key: string]: any };
            },
            i: number,
          ) => {
            return (
              <Table
                hoverable
                className="w-[calc(100%-0.5rem)]"
                key={JSON.stringify(log)}
              >
                <Table.Head className="h-10 min-h-full">
                  <Table.HeadCell colSpan={2}>
                    <span>
                      Log {i} ({log.function?._id || log.error?._id})
                    </span>
                    {log.error ? (
                      (() => {
                        return (
                          <div className="absolute right-[1.5rem] top-[0.4rem] text-red-600">
                            <MdErrorOutline className="mr-1 inline-block size-7" />
                            <span className="inline-block">Error</span>
                          </div>
                        );
                      })()
                    ) : (
                      <></>
                    )}
                  </Table.HeadCell>
                </Table.Head>

                <Table.Body className="divide-y">
                  {(() => {
                    const baseObj = log.function ||
                      log.error || { function: {} };

                    return DETAIL_ENTRY_ORDER.map((entry) => {
                      if (
                        entry in baseObj ||
                        entry in baseObj.meta ||
                        ("error" in baseObj.meta && entry in baseObj.meta.error)
                      ) {
                        return (
                          <Table.Row
                            className="bg-white dark:border-gray-700 dark:bg-gray-800"
                            key={entry + JSON.stringify(baseObj)}
                          >
                            {entry === "stack" ? (
                              <Table.Cell
                                colSpan={2}
                                className="w-1/5 whitespace-nowrap p-0 font-medium text-gray-900 dark:text-white"
                              >
                                <StackTraceAccordion
                                  stackTrace={baseObj.meta.error.stack}
                                />
                              </Table.Cell>
                            ) : (
                              <>
                                <Table.Cell className="w-1/5 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {ENTRY_TABLE_NAMES[entry]}
                                </Table.Cell>
                                <Table.Cell
                                  className={
                                    STYLING[entry]
                                      ? String(STYLING[entry][baseObj[entry]]) +
                                        " w-4/5"
                                      : "w-4/5"
                                  }
                                >
                                  {(() => {
                                    switch (entry) {
                                      case "attempts":
                                        return `${baseObj.meta.attempts} / ${baseObj.meta.max_attempts}`;
                                      case "stack":
                                        return <></>;
                                      default:
                                        return (
                                          baseObj[entry] ||
                                          baseObj.meta[entry] ||
                                          baseObj.meta?.error[entry]
                                        );
                                    }
                                  })()}
                                </Table.Cell>
                              </>
                            )}
                          </Table.Row>
                        );
                      }

                      return (
                        <React.Fragment
                          key={entry + JSON.stringify(baseObj)}
                        ></React.Fragment>
                      );
                    });

                    return <></>;
                  })()}
                </Table.Body>
              </Table>
            );
          },
        )}
      </div>
    </>
  );
}
