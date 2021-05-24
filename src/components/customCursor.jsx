import React, { useEffect } from "react";
import { useAppContext } from "../context/store";

export default function CustomCursor() {
  const context = useAppContext();

  useEffect(() => {
    if (
      typeof window !== `undefined` &&
      document.body.classList.contains("onhover")
    ) {
      document.body.classList.add("cursor-enabled");

      const cursorMove = (e) => {
        context.cursorSel.current.style.transform = `translate(-50%, -50%) translate(${e.clientX}px, ${e.clientY}px)`;
        context.cursorTrailSel.current.style.transform = `translate(-50%, -50%) translate(${e.clientX}px, ${e.clientY}px)`;
      };

      let cursorTimeout = null;
      const cursorDisableDelay = 250;
      const cursorDown = (event) => {
        if (event.which === 3) {
          event.stopImmediatePropagation();
          return false;
        }
        if (cursorTimeout !== null) clearTimeout(cursorTimeout);
        cursorTimeout = setTimeout(() => {
          document.body.classList.add("scrollDrag");
          cursorTimeout = null;
        }, cursorDisableDelay);

        if (context.cursorSel.current)
          context.cursorSel.current.classList.add("click");
        if (context.cursorTrailSel.current)
          context.cursorTrailSel.current.classList.add("click");
      };

      const cursorUp = (event) => {
        if (context.cursorSel.current)
          context.cursorSel.current.classList.remove("click");

        if (context.cursorTrailSel.current)
          context.cursorTrailSel.current.classList.remove("click");

        if (context.cursorTrailSel.current)
          context.cursorTrailSel.current.classList.remove("hover");

        document.body.classList.remove("scrollDrag");
        if (cursorTimeout !== null) clearTimeout(cursorTimeout);
      };

      context.cursorHoverOn = () => {
        if (context.cursorTrailSel.current)
          context.cursorTrailSel.current.classList.add("hover");
      };

      context.cursorHoverOff = () => {
        if (context.cursorTrailSel.current)
          context.cursorTrailSel.current.classList.remove("hover");
      };

      context.cursorHover.current = {
        onMouseEnter: context.cursorHoverOn,
        onMouseLeave: context.cursorHoverOff,
      };

      context.cursorDefaultState = () => {
        if (context.cursorSel.current)
          context.cursorSel.current.classList.remove("click");

        if (context.cursorTrailSel.current)
          context.cursorTrailSel.current.classList.remove("hover");
      };

      document.addEventListener("mousemove", cursorMove, false);
      document.addEventListener("mousedown", cursorDown, false);
      document.addEventListener("mouseup", cursorUp, false);

      return () => {
        document.removeEventListener("mousemove", cursorMove, false);
        document.removeEventListener("mousedown", cursorDown, false);
        document.removeEventListener("mouseup", cursorUp, false);
      };
    }
  }, []);

  return (
    <>
      <div id="cursor" ref={context.cursorSel}>
        <svg width="8" height="8" viewBox="0 0 8 8">
          <path
            d="M4.424 0.856003C4.088 0.856003 3.944 1.09601 3.56 1.72001C2.84 2.96801 2.744 3.064 1.496 3.448C1.16 3.592 0.728 3.928 0.728 4.168C0.728 4.312 0.968 4.552 1.304 4.744C2.024 5.128 2.456 5.41601 2.84 6.08801C3.464 7.19201 3.8 7.81601 4.28 7.81601C4.472 7.81601 4.568 7.672 4.664 7.432C5.576 5.464 5.576 5.416 7.064 4.792C7.304 4.648 7.352 4.69601 7.352 4.45601C7.352 4.16801 7.16 4.072 6.68 3.736C5.624 3.064 5.384 2.728 4.952 1.48C4.712 1.048 4.52 0.856003 4.424 0.856003Z"
            fill="black"
          />
        </svg>
      </div>
      <div id="cursor-trail" ref={context.cursorTrailSel} />
    </>
  );
}
