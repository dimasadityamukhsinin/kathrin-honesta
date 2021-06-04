import React from "react";
import Cursor from "../components/cursor/index";

export default function GatsbyLayout({ children }) {

  return (
    <>
        {/* <CustomCursor /> */}
        <Cursor />
      {children}
    </>
  );
}
