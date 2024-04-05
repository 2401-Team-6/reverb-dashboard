import { Sidebar } from "flowbite-react";
import { FunctionComponent, SVGProps, useEffect, useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import { TbTimelineEventExclamation } from "react-icons/tb";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { IoSkullOutline } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";

const CATEGORIES: {
  [key: string]: {
    subcategories: { name: string; url: string }[];
    icon: FunctionComponent<SVGProps<SVGSVGElement>>;
    url?: string;
  };
} = {
  Events: {
    subcategories: [],
    icon: TbTimelineEventExclamation,
    url: "events",
  },
  Functions: { subcategories: [], icon: PiBracketsCurlyBold, url: "functions" },
  "Error Logs": { subcategories: [], icon: MdErrorOutline, url: "errors" },
  "Dead Letter": {
    subcategories: [],
    icon: IoSkullOutline,
    url: "dead-letter",
  },
  "All Logs": { subcategories: [], icon: TiDocumentText, url: "all" },
};

export default function CategoryWindow() {
  const [activeCategory, setActiveCategory] = useState<string>("");
  const url = useLocation();

  useEffect(() => {
    let pathSegments = url.pathname.split("/");

    setActiveCategory(() => pathSegments[1]);
  }, [url]);

  return (
    <Sidebar className="w-1/5" aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {Object.keys(CATEGORIES).map((category) => {
            return CATEGORIES[category].subcategories.length === 0 ? (
              <Link to={CATEGORIES[category].url || "#"} key={category}>
                <Sidebar.Item
                  href="#"
                  icon={CATEGORIES[category].icon}
                  key={category}
                  active={activeCategory === CATEGORIES[category].url}
                  as="div"
                >
                  {category}
                </Sidebar.Item>
              </Link>
            ) : (
              <Sidebar.Collapse
                icon={CATEGORIES[category].icon}
                label={category}
                key={category}
                className={
                  CATEGORIES[category].subcategories.some(
                    (subcategory) => activeCategory === subcategory.url,
                  )
                    ? "contains-active"
                    : ""
                }
              >
                {CATEGORIES[category].subcategories.map((subcategory) => {
                  return (
                    <Link to={subcategory.url || "#"} key={subcategory.name}>
                      <Sidebar.Item
                        href="#"
                        key={subcategory.name}
                        active={activeCategory === subcategory.url}
                        className="relative"
                        as="div"
                      >
                        {(() => {
                          return activeCategory === subcategory.url ? (
                            <div
                              className={`absolute left-5 top-[.975rem] size-2 rounded-full bg-turquoise-700 shadow-inner`}
                            ></div>
                          ) : (
                            <></>
                          );
                        })()}
                        {subcategory.name}
                      </Sidebar.Item>
                    </Link>
                  );
                })}
              </Sidebar.Collapse>
            );
          })}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
