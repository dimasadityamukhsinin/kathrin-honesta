import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import Navigation from "../navigation";
import CustomCursor from "../cursor";
import { useAppContext } from "../../context/store";
import checkCursor from "../../utils/checkCursor";

const MainLayout = ({ pageTitle, children }) => {
  const PageTitle = pageTitle
    ? `${pageTitle} ⟡ Kathrin Honesta Portfolio Website`
    : "Kathrin Honesta Portfolio Website";
    const context = useAppContext();

  const duration = 0.35;
  const variant = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: duration,
        delay: duration,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: duration },
    },
  };

  const checkMobile = () => {
    if (window.innerWidth <= 576) {
      context.setMobile(true);
    } else {
      context.setMobile(false);
    }
  };

  useEffect(() => {
    checkMobile();
    checkCursor();

    document.body.scrollTop = document.documentElement.scrollTop = 0;
    window.addEventListener("resize", checkMobile, false);
    window.addEventListener("resize", checkCursor, false);

    return () => {
      window.removeEventListener("resize", checkMobile, false);
      window.removeEventListener("resize", checkCursor, false);
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <motion.main
        variants={variant}
        initial="initial"
        animate="enter"
        exit="exit"
        id="container"
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
