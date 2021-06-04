//SCSS
import "./src/styles/global.scss";

import React from "react";
import { AppWrapper } from "./src/context/store";
import SmoothScroll from "./src/components/smooth";
import { isWinPhone, isAndroid, isIOS } from "react-device-detect";

export const wrapRootElement = ({ element }) => (
  <AppWrapper>{element}</AppWrapper>
);

export const onClientEntry = () => {
  if (!isWinPhone && !isAndroid && !isIOS) {
    document.body.classList.add('onhover');
  }
  // SmoothScroll(document, 80, 30);
};
