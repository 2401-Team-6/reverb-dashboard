import { JsonViewer } from "@textea/json-viewer";
import reverb from "../themes/jsonViewerTheme";

export default function LogJsonViewer(props: {
  log: { [key: string]: any };
  className?: string;
}) {
  return (
    <JsonViewer
      value={props.log}
      theme={reverb}
      className={`mb-4 rounded px-4 py-5 ${props.className}`}
    ></JsonViewer>
  );
}
