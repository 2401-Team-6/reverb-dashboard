import { CustomFlowbiteTheme } from "flowbite-react";

const flowbiteTheme: CustomFlowbiteTheme = {
  navbar: {
    root: {
      base: "bg-bgBlue",
    },
    link: {
      active: {
        on: "text-offWhite",
        off: "text-slate-400",
      },
    },
  },
  sidebar: {
    root: {
      base: "shadow-inner-lg h-full first:ml-4 last:mr-4",
    },
    item: {
      active: "bg-gray-700",
      icon: {
        active: "text-turquoise-700 dark:text-turquoise-700",
      },
      label: "",
    },
  },
  tooltip: {
    base: "absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium shadow-sm",
    style: {
      dark: "bg-gray-900 text-offWhite dark:bg-gray-900",
    },
    arrow: {
      style: {
        dark: "bg-gray-900 text-white dark:bg-gray-900",
      },
    },
  },
  modal: {
    content: {
      inner:
        "p-4 relative flex max-h-[90dvh] flex-col rounded-lg bg-white shadow dark:bg-bgBlue",
    },
    header: {
      close: {
        base: "hidden",
      },
    },
  },
  textInput: {
    field: {
      input: {
        colors: {
          reverb:
            "text-offWhite bg-inherit focus:outline-none focus:ring-0 focus:border-turquoise-700",
          reverbFailure:
            "text-offWhite bg-inherit focus:outline-none focus:ring-0 focus:border-turquoise-700 border-red-700",
        },
      },
    },
  },
  button: {
    color: {
      reverb: "bg-turquoise-700",
    },
    gradientDuoTone: {
      reverb:
        "bg-gradient-to-t from-turquoise-700 to-turquoise-600 bg-turquoise-400 enabled:hover:bg-none enabled:focus:ring-0 enabled:focus:bg-turquoise-800 enabled:focus:bg-none",
    },
    outline: {
      on: "flex w-full justify-center bg-white text-offWhite transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900",
    },
  },
  tabs: {
    tablist: {
      tabitem: {
        styles: {
          underline: {
            base: "border-turquoise-700 focus:ring-1",
            active: {
              on: "active rounded-t-lg border-b-2 text-turquoise-700",
            },
          },
        },
      },
    },
  },
  accordion: {
    root: {
      base: "divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",
      flush: {
        on: "",
        off: "",
      },
    },
    title: {
      base: "flex w-full items-center justify-between p-5 text-left font-medium text-offWhite",
      heading: "relative right-5",
      open: {
        off: "",
        on: "text-turquoise-700 bg-gray-800",
      },
      flush: {
        off: "",
      },
      arrow: {
        base: "h-6 w-6 shrink-0 text-offWhite",
      },
    },
    content: {
      base: "p-5 dark:bg-gray-900",
    },
  },
  table: {
    root: {
      base: "w-full text-left text-sm text-gray-500 dark:text-gray-400 mb-4",
    },
  },
};

export default flowbiteTheme;
