import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { useAppContext } from "../context/store";

const NavScroll = ({ topTitle, botTitle, topLink, backTop = false }) => {
  const [scrollEnd, setScrollEnd] = useState(false);
  const context = useAppContext();

  const scrollToTop = () => {

    let duration = window.innerHeight / 3;

    if (duration > 3500) duration = 3500;

    window.scrollTo(0, 0, duration, {
      easing: {
        easeOutCubic: (t) => --t * t * t + 1
      },
    });
    // window.scrollTo({
    //   top: 0,
    //   left: 0,
    //   behavior: "smooth",
    // });
    // console.log("hello")
    // document.body.scrollTop = document.documentElement.scrollTop = 0;
  };

  const windowHeight = () =>
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.getElementsByTagName("body")[0].clientHeight;

  const detectScroll = () => {
    const currentScroll = window.scrollY;
    const totalHeight = document.body.clientHeight;

    if (
      totalHeight > 0 &&
      currentScroll > totalHeight - windowHeight() * 1.1 &&
      totalHeight > windowHeight() * 1.1
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", detectScroll, false);
    return () => {
      document.removeEventListener("scroll", detectScroll, false);
    };
  }, []);

  return (
    <section className="navScroll">
      <div>
        <Link to={`/${topLink}`} {...context.cursorHover.current}>{topTitle}</Link>
      </div>
      {backTop ? (
        <div className={scrollEnd ? "scrollEnd" : null}>
          <div>Scroll</div>
          <div>
            <button onClick={() => scrollToTop()} {...context.cursorHover.current}>Back to Top</button>
          </div>
        </div>
      ) : (
        <div>
          <span>{botTitle}</span>
        </div>
      )}
    </section>
  );
};

export default NavScroll;
