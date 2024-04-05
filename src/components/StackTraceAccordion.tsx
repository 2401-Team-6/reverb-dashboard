import { Accordion } from "flowbite-react";

export default function StackTraceAccordion(props: { stackTrace: string }) {
  return (
    <Accordion
      collapseAll
      className="hover:bg-grey-500 relative left-0 top-0 h-full w-full text-offWhite focus:underline focus:outline-none focus:ring-0"
    >
      <Accordion.Panel className="focus:underline focus:outline-none focus:ring-0">
        <Accordion.Title className="focus:underline focus:outline-none focus:ring-0">
          <span className="ml-[1.4rem] ">Stack trace</span>
        </Accordion.Title>
        <Accordion.Content className="focus:underline focus:outline-none focus:ring-0">
          <span className="whitespace-pre-wrap">{props.stackTrace}</span>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
