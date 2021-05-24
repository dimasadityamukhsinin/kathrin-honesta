import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import CustomCursor from "../customCursor";
import Navigation from "../navigation";
import LocomotiveScroll from 'locomotive-scroll';
import { isWinPhone, isAndroid, isIOS } from "react-device-detect";

const MainLayout = ({ children, pageTitle }) => {
  const PageTitle = pageTitle
    ? `${pageTitle} ⟡ Kathrin Honesta Portfolio Website`
    : "Kathrin Honesta Portfolio Website";

  const [cursor, setCursor] = useState(false);

  useEffect(() => {
    if (!isWinPhone && !isAndroid && !isIOS) {
      setCursor(true);
    }else {
      document.body.style.overflow = "auto";
    }
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    // import("locomotive-scroll").then(locomotiveModule => {
    //   const scroll = new locomotiveModule.default({
    //     el: document.querySelector("[data-scroll-container]"),
    //     smooth: true,
    //     smoothMobile: true,
    //   })
    // })
  }, []);

  return (
    <>
      {cursor ? (
        <div id="cursorwrapper">
          <CustomCursor />
        </div>
      ) : null}
      <main>
        <Helmet>
          <title>{PageTitle}</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1,viewport-fit=cover"
          />
        </Helmet>
        <Navigation />
        {children}
      </main>
    </>
  );
};

export default MainLayout;
