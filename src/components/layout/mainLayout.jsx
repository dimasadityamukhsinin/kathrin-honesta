import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navigation from "../navigation";
import { isWinPhone, isAndroid, isIOS } from "react-device-detect";

const MainLayout = ({ children, pageTitle }) => {
  const PageTitle = pageTitle
    ? `${pageTitle} ⟡ Kathrin Honesta Portfolio Website`
    : "Kathrin Honesta Portfolio Website";

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    if (isWinPhone || isAndroid || isIOS) {
      document.querySelector("#cursorwrapper").style.display = "none";
    }
  }, []);

  return (
    <>
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
