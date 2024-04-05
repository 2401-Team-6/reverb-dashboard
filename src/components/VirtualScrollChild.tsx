import React from "react";
import { useInView } from "react-intersection-observer";

export default function VirtualScrollChild(props: {
  height: number;
  children: React.ReactNode;
  inViewRoot?: Element;
}) {
  const [ref, inView] = useInView({
    root: document.getElementsByClassName("ScrollbarsCustom-Scroller")[0],
    threshold: 0,
    initialInView: true,
    rootMargin: "150px 0px",
  });
  const style = {
    height: `${props.height}px`,
    overflow: "hidden",
  };
  return (
    <div style={style} ref={ref}>
      {inView ? props.children : null}
    </div>
  );
}
