import { graphql, Link  } from "gatsby";
import React, { useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "../styles/modules/projects.module.scss";

import MainLayout from "../components/layout/mainLayout";
import NavScroll from "../components/navScroll";
import { useAppContext } from "../context/store";

import checkCursor from "../utils/checkCursor";
import { addStyle, removeStyle } from "../utils/projectStyle";
import { transitionProjects } from "../utils/transitionProjects";

const ProjectsPage = () => {
  const context = useAppContext();

  useEffect(() => {
    let mobile = false;
    if (window.innerWidth <= 576) {
      mobile = true;
    } else {
      mobile = false;
    }

    window.addEventListener(
      "resize",
      () => {
        if (document.getElementsByClassName("projectContent")[0]) {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
          if (window.innerWidth <= 576) {
            mobile = true;

            removeStyle();

            window.removeEventListener("scroll", transitionProjects, false);
          } else {
            mobile = false;

            addStyle();

            window.addEventListener("scroll", transitionProjects, false);
          }
        }
      },
      false
    );

    if (mobile === false) {
      addStyle();

      window.addEventListener("scroll", transitionProjects, false);
    } else {
      removeStyle();

      window.removeEventListener("scroll", transitionProjects, false);
    }

    checkCursor();

    window.addEventListener("resize", checkCursor, false);


    return () => {
      window.removeEventListener("resize", checkCursor, false);
      window.removeEventListener("scroll", transitionProjects, false);
    };
  }, []);

  return (
    <MainLayout pageTitle="Projects">
      <NavScroll topTitle="Info" topLink="about" backTop={true} mobile="next" />
      <section id={styles.projects} className="projectContent">
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <Link to="/">
            <div>
              <span>Jessica Watson</span>
            </div>
            <div>
              <StaticImage
                src="../images/jessica watson_final.webp"
                alt="Jessica Watson"
                placeholder="blurred"
                loading="eager"
                objectFit="contain"
                style={{ maxHeight: "100%" }}
                onMouseEnter={() => context.cursorChangeHandler("hovered")}
                onMouseLeave={() => context.cursorChangeHandler("")}
              />
            </div>
          </Link>
        </div>
        <div>
          <Link to="/">
            <div>
              <span>suri-ram</span>
            </div>
            <div>
              <StaticImage
                src="../images/Nursery_1.webp"
                alt="Suri-Ram"
                placeholder="blurred"
                loading="eager"
                objectFit="contain"
                style={{ maxHeight: "100%" }}
                onMouseEnter={() => context.cursorChangeHandler("hovered")}
                onMouseLeave={() => context.cursorChangeHandler("")}
              />
            </div>
          </Link>
        </div>
        <div>
          <Link to="/">
            <div>
              <span>Nautilus</span>
            </div>
            <div>
              <StaticImage
                src="../images/nautilus.webp"
                alt="Nautilus"
                placeholder="blurred"
                loading="eager"
                objectFit="contain"
                style={{ maxHeight: "100%" }}
                onMouseEnter={() => context.cursorChangeHandler("hovered")}
                onMouseLeave={() => context.cursorChangeHandler("")}
              />
            </div>
          </Link>
        </div>
        <div>
          <Link to="/">
            <div>
              <span>Nautilus</span>
            </div>
            <div>
              <StaticImage
                src="../images/nautilus.webp"
                alt="Nautilus"
                placeholder="blurred"
                loading="eager"
                objectFit="contain"
                style={{ maxHeight: "100%" }}
                onMouseEnter={() => context.cursorChangeHandler("hovered")}
                onMouseLeave={() => context.cursorChangeHandler("")}
              />
            </div>
          </Link>
        </div>
        <div>
          <Link to="/">
            <div>
              <span>tes</span>
            </div>
            <div>
              <StaticImage
                src="../images/nautilus.webp"
                alt="Nautilus"
                placeholder="blurred"
                loading="eager"
                objectFit="contain"
                style={{ maxHeight: "100%" }}
                onMouseEnter={() => context.cursorChangeHandler("hovered")}
                onMouseLeave={() => context.cursorChangeHandler("")}
              />
            </div>
          </Link>
        </div>
        <div>
          <p>©2020 Kathrin Honesta.</p>
        </div>
      </section>
    </MainLayout>
  );
};

export const query = graphql`
  query {
    jessica: file(relativePath: { eq: "jessica watson_final.webp" }) {
      childImageSharp {
        gatsbyImageData(formats: [WEBP], placeholder: BLURRED)
      }
    }
    nautilus: file(relativePath: { eq: "nautilus.webp" }) {
      childImageSharp {
        gatsbyImageData(formats: [WEBP], placeholder: BLURRED)
      }
    }
    nursery: file(relativePath: { eq: "Nursery_1.webp" }) {
      childImageSharp {
        gatsbyImageData(formats: [WEBP], placeholder: BLURRED)
      }
    }
  }
`;

export default ProjectsPage;
