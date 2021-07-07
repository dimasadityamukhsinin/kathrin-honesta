//SCSS
import "./src/styles/global.scss";

import React from "react";
import { AppWrapper } from "./src/context/store";
import { AnimatePresence } from "framer-motion";

// Wrap dengan animation
export const wrapPageElement = (props) => (
  <AnimatePresence exitBeforeEnter>{props.element}</AnimatePresence>
);

// Wrap dengan context
export const wrapRootElement = (props) => (
  <AppWrapper>{props.element}</AppWrapper>
);
