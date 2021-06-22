import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import MainLayout from "../components/layout/mainLayout";
import NavScroll from "../components/navScroll";
import * as styles from "../styles/modules/about.module.scss";
import { useAppContext } from "../context/store";
import React, { useEffect, useRef } from "react";
import checkCursor from "../utils/checkCursor";
import { transition } from "../utils/transition";

const AboutPage = () => {
  const context = useAppContext();
  const contentRef = useRef(new Array());

  useEffect(() => {
    // Fungsi transisi
    transition({
      content: contentRef,
      type: "all",
    });

    // Check cursor
    checkCursor();
    window.addEventListener("resize", checkCursor, false);
    return () => {
      window.removeEventListener("resize", checkCursor, false);
    };
  }, []);

  return (
    <MainLayout pageTitle="About">
      <NavScroll topTitle="Close" topLink="projects" />
      <section id={styles.about}>
        <div />
        <div ref={(el) => contentRef.current.push(el)}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Kathrin
            Honesta short biography on the website.
          </p>
        </div>
        <div>
          <span>Selected Clients</span>
          <div className={styles.clients} ref={(el) => contentRef.current.push(el)}>
            <StaticImage
              src="../images/jessica watson_final.webp"
              alt="Jessica Watson"
              placeholder="blurred"
              loading="eager"
              objectFit="cover"
            />
            <StaticImage
              src="../images/jessica watson_final.webp"
              alt="Jessica Watson"
              placeholder="blurred"
              loading="eager"
              objectFit="cover"
            />
            <StaticImage
              src="../images/jessica watson_final.webp"
              alt="Jessica Watson"
              placeholder="blurred"
              loading="eager"
              objectFit="cover"
            />
            <StaticImage
              src="../images/jessica watson_final.webp"
              alt="Jessica Watson"
              placeholder="blurred"
              loading="eager"
              objectFit="cover"
            />
            <StaticImage
              src="../images/jessica watson_final.webp"
              alt="Jessica Watson"
              placeholder="blurred"
              loading="eager"
              objectFit="cover"
            />
            <StaticImage
              src="../images/jessica watson_final.webp"
              alt="Jessica Watson"
              placeholder="blurred"
              loading="eager"
              objectFit="cover"
            />
            <StaticImage
              src="../images/jessica watson_final.webp"
              alt="Jessica Watson"
              placeholder="blurred"
              loading="eager"
              objectFit="cover"
            />
            <StaticImage
              src="../images/jessica watson_final.webp"
              alt="Jessica Watson"
              placeholder="blurred"
              loading="eager"
              objectFit="cover"
            />
          </div>
          <span>Press</span>
          <div className={styles.press}>
            <Link
              to="/"
              onMouseEnter={() => context.cursorChangeHandler("hovered")}
              onMouseLeave={() => context.cursorChangeHandler("")}
            >
              Youtube (2019)
            </Link>
            <Link
              to="/"
              onMouseEnter={() => context.cursorChangeHandler("hovered")}
              onMouseLeave={() => context.cursorChangeHandler("")}
            >
              FIMA (2018)
            </Link>
            <Link
              to="/"
              onMouseEnter={() => context.cursorChangeHandler("hovered")}
              onMouseLeave={() => context.cursorChangeHandler("")}
            >
              Tabloit Gadis (2017)
            </Link>
          </div>
          <span>Contact</span>
          <div className={styles.contact}>
            <Link
              to="/"
              onMouseEnter={() => context.cursorChangeHandler("hovered")}
              onMouseLeave={() => context.cursorChangeHandler("")}
            >
              hello@kathrinhonesta.com
            </Link>
            <Link
              to="/"
              onMouseEnter={() => context.cursorChangeHandler("hovered")}
              onMouseLeave={() => context.cursorChangeHandler("")}
            >
              behance.net
            </Link>
            <Link
              to="/"
              onMouseEnter={() => context.cursorChangeHandler("hovered")}
              onMouseLeave={() => context.cursorChangeHandler("")}
            >
              facebook.com
            </Link>
          </div>
          <span>2020 © Kathrin Honesta</span>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;
