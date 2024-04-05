import { Tooltip } from "flowbite-react";
import { MdErrorOutline } from "react-icons/md";
import { TbTimelineEventExclamation } from "react-icons/tb";
import { PiBracketsCurlyBold } from "react-icons/pi";

export default function EntryStatusIndicator(props: {
  status?: string;
  tooltip: string;
  className?: string;
  symbol?: "error" | "event" | "function";
}) {
  let color;
  switch (props.status) {
    case "completed":
      color = "bg-green-500";
      break;
    case "running":
      color = "bg-yellow-400";
      break;
    case "error":
      color = "bg-red-700";
      break;
    case "active":
      color = "bg-turquoise-700";
      break;
    default:
      color = "bg-gray-700";
  }

  return (
    <div
      className={
        "float-right inline-block size-2" + (props.symbol ? " mr-1" : "")
      }
    >
      <Tooltip content={props.tooltip} style="dark" className="z-50">
        {(() => {
          switch (props.symbol) {
            case "error":
              return (
                <MdErrorOutline
                  className={
                    `inline-block size-5 ` +
                    (props.status === "active" ? "text-turquoise-700" : "")
                  }
                />
              );
            case "event":
              return (
                <TbTimelineEventExclamation
                  className={
                    `inline-block size-5 ` +
                    (props.status === "active" ? "text-turquoise-700" : "")
                  }
                />
              );
            case "function":
              return (
                <PiBracketsCurlyBold
                  className={
                    `inline-block size-5 ` +
                    (props.status === "active" ? "text-turquoise-700" : "")
                  }
                />
              );
            default:
              return (
                <div
                  className={`inline-block size-2 rounded-full shadow-inner ${color} ${props.className}`}
                ></div>
              );
          }
        })()}
      </Tooltip>
    </div>
  );
}
