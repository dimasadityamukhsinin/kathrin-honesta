import React from "react";
import CustomCursor from "../components/customCursor";

export default function GatsbyLayout({ children }) {

  return (
    <>
      <div id="cursorwrapper">
        <CustomCursor />
      </div>
      {children}
    </>
  );
}
