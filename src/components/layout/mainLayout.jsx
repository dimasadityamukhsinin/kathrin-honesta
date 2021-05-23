import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import CustomCursor from "../customCursor";
import Navigation from "../navigation";
import LocomotiveScroll from "locomotive-scroll";
import { isWinPhone, isAndroid, isIOS } from "react-device-detect";

const MainLayout = ({ children, pageTitle }) => {
  const PageTitle = pageTitle
    ? `${pageTitle} ⟡ Kathrin Honesta Portfolio Website`
    : "Kathrin Honesta Portfolio Website";

  const [cursor, setCursor] = useState(false);

  function handle(delta) {
    var animationInterval = 20; //controls the scroll animation after scroll is done
    var scrollSpeed = 20; //controls the scroll animation after scroll is done
    var goUp = true;
    var end = null;
    var interval = null;

    if (end == null) {
      end = window.scrollTop;
    }
    end -= 20 * delta;
    goUp = delta > 0;

    if (interval == null) {
      interval = setInterval(function () {
        var scrollTop = window.scrollTop;
        var step = Math.round((end - scrollTop) / scrollSpeed);
        if (
          scrollTop <= 0 ||
          scrollTop >= document.prop("scrollHeight") - document.height() ||
          (goUp && step > -1) ||
          (!goUp && step < 1)
        ) {
          clearInterval(interval);
          interval = null;
          end = null;
        }
        window.scrollTop = scrollTop + step;
      }, animationInterval);
    }
  }

  function wheel(event) {
    let delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 40;
    //controls the scroll wheel range/speed
    else if (event.detail) delta = -event.detail / 40;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
  }

  useEffect(() => {
    if (!isWinPhone && !isAndroid && !isIOS) {
      setCursor(true);
    } else {
      document.body.style.overflow = "auto";
    }
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    // const scroll = new LocomotiveScroll({
    //   el: document.querySelector("[data-scroll-container]"),
    //   smooth: true,
    // });
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
