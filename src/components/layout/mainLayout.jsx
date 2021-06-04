import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navigation from "../navigation";
import { motion } from "framer-motion";
import { useAppContext } from "../../context/store";
import CustomCursor from "../cursor";

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
        <CustomCursor />
        {children}
      </motion.main>
    </>
  );
};

export default MainLayout;
