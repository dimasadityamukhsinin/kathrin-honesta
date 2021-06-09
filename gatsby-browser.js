//SCSS
import "./src/styles/global.scss";

import React from "react";
import { AppWrapper } from "./src/context/store";
import SmoothScroll from "./src/components/smooth";

export const wrapRootElement = ({ element }) => (
  <AppWrapper>{element}</AppWrapper>
);

export const onClientEntry = () => {
  SmoothScroll(document, 80, 30);
};
