import React from "react";
import CustomCursor from "../components/cursor/index";

export default function GatsbyLayout({ children }) {
  return (
    <>
      <CustomCursor />
      {children}
    </>
  );
}
