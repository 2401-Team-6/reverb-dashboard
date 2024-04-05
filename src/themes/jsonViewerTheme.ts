import type { NamedColorspace } from "@textea/json-viewer";

const reverb: NamedColorspace = {
  scheme: "Reverb",
  author: "Morgan Davis (https://github.com/Morgan-Summer-Davis)",
  base00: "#020617", // background
  base01: "#ffffff",
  base02: "#97FFE9", // lines on left AND background behind undefined and null
  base03: "#ffffff", //
  base04: "#fbbf24", // number of items
  base05: "#ec4899", // undefined text
  base06: "#ffffff",
  base07: "#e2e8f0", // keys
  base08: "#b91c1c", // null
  base09: "#00E9CA", // strings
  base0A: "#ffffff",
  base0B: "#22c55e", // float
  base0C: "#ffffff",
  base0D: "#d946ef", // date
  base0E: "#8b5cf6", // bool
  base0F: "#3b82f6", // numbers
};

export default reverb;
