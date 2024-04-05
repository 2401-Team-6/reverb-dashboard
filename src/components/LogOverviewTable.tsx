import { Table } from "flowbite-react";
import { MdErrorOutline } from "react-icons/md";
import StackTraceAccordion from "./StackTraceAccordion";
import React from "react";

const ENTRY_ORDER = [
  "message",
  "funcName",
  "name",
  "funcId",
  "stepId",
  "eventName",
  "eventId",
  "timestamp",
  "invoked",
  "lastUpdate",
  "status",
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
  eventId: "Event ID",
  attempts: "Attempt",
  message: "Message",
  timestamp: "Logged at",
  stack: "Stack trace",
  name: "Function Name",
  eventName: "Event Name",
  stepId: "Step ID",
};

const STYLING: { [key: string]: { [key: string]: string } } = {
  status: {
    completed: "text-green-500",
    error: "text-red-700",
    running: "text-yellow-400",
  },
};

export default function LogOverviewTable(props: {
  json: { [key: string]: any };
}) {
  const baseObj =
    props.json.function || props.json.error || props.json.event || {};

  return (
    <>
      <div>
        <Table hoverable className="mb-4 w-[calc(100%-0.5rem)]">
          <Table.Head className="h-10 min-h-full">
            <Table.HeadCell colSpan={2}>
              <span>Overview</span>
              {props.json.error ? (
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
            {ENTRY_ORDER.map((entry) => {
              if (
                entry in baseObj ||
                entry in props.json ||
                ("meta" in baseObj &&
                  (entry in baseObj.meta ||
                    ("payload" in baseObj.meta &&
                      entry in baseObj.meta.payload) ||
                    ("error" in baseObj.meta && entry in baseObj.meta.error)))
              ) {
                return (
                  <Table.Row
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    key={entry}
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
                              case "eventId":
                                return (
                                  baseObj.eventId ||
                                  baseObj.meta?.eventId ||
                                  baseObj.function?.meta?.eventId ||
                                  baseObj.error?.meta?.eventId ||
                                  "Cron job"
                                );
                              default:
                                return (
                                  props.json[entry] ||
                                  baseObj[entry] ||
                                  ("meta" in baseObj &&
                                    (baseObj.meta[entry] ||
                                      ("payload" in baseObj.meta &&
                                        baseObj.meta.payload[entry]) ||
                                      ("error" in baseObj.meta &&
                                        baseObj.meta.error[entry])))
                                );
                            }
                          })()}
                        </Table.Cell>
                      </>
                    )}
                  </Table.Row>
                );
              }

              return <React.Fragment key={entry}></React.Fragment>;
            })}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}
