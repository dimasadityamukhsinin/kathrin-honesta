import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Navigation from "../navigation";
import { isWinPhone, isAndroid, isIOS } from "react-device-detect";
import { motion } from "framer-motion";
import { useAppContext } from "../../context/store";

const MainLayout = ({ children, pageTitle }) => {
  const PageTitle = pageTitle
    ? `${pageTitle} ⟡ Kathrin Honesta Portfolio Website`
    : "Kathrin Honesta Portfolio Website";
  const context = useAppContext();

  const variant = {
    nextMobile: {
      opacity: 0,
      x: "-100%",
    },
    backMobile: {
      opacity: 0,
      x: "100%",
    },
    desktop: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.8,
      },
    },
    visibleMobile: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    // if (isWinPhone || isAndroid || isIOS) {
    //   document.querySelector("#cursorwrapper").style.display = "none";
    // }

    document.addEventListener("scroll", () => {
      // console.log(window.scrollY)
      // console.log(Math.max(window.scrollY, 25));
      const newScrollHeight = Math.ceil(window.scrollY) *50;
      // console.log(newScrollHeight)
      const opacity = Math.min(newScrollHeight  , 1);
    }, false)
  }, []);

  return (
    <>
      <motion.main
        initial={
          context.mobile === "back"
            ? "backMobile"
            : context.mobile === "next"
            ? "nextMobile"
            : "desktop"
        }
        animate={context.mobile !== null ? "visibleMobile" : "visible"}
        variants={variant}
      >
        <Helmet>
          <title>{PageTitle}</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1,viewport-fit=cover"
          />
        </Helmet>
        <Navigation />
        {children}
      </motion.main>
    </>
  );
};

export default MainLayout;
