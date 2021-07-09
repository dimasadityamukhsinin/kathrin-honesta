import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import ASScroll from '@ashthornton/asscroll'

import CustomCursor from "../components/cursor/index";

export default function GatsbyLayout(props) {
  const asscroll = new ASScroll();

  useEffect(() => {
    asscroll.enable()
  }, [])

  return (
    <div asscroll-container>
      {props.children}
    </div>
  );
}
