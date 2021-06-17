import { graphql } from "gatsby";
import React, { useEffect } from "react";
import MainLayout from "../components/layout/mainLayout";
import * as styles from "../styles/modules/projects.module.scss";
import NavScroll from "../components/navScroll";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useAppContext } from "../context/store";
import checkCursor from "../utils/checkCursor";
import { addStyle, removeStyle } from "../utils/projectStyle";
import { transitionProjects } from "../utils/transitionProjects";
import { useTransform, useViewportScroll, motion } from "framer-motion";

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

  // let firstTranslate = useTransform(scrollY, [0, 25], [0, -25]);
  // let secondTranslate = useTransform(
  //   scrollY,
  //   [25, height],
  //   [height / 8, -height]
  // );
  // let thirdTranslate = useTransform(
  //   scrollY,
  //   [height, height * 2],
  //   [height / 8, -height]
  // );

  // let manyTranslate = useTransform(
  //   scrollY,
  //   [height * 2, height * 3],
  //   [height / 8, -height]
  // );

  // let manyTranslate2 = useTransform(
  //   scrollY,
  //   [height * 3, height * 4],
  //   [height / 8, -height]
  // );

  // let manyTranslate3 = useTransform(
  //   scrollY,
  //   [height * 4, height * 5],
  //   [height / 8, -height]
  // );

  // let firstTextOpacity = useTransform(scrollY, [0, 25], [1, 0]);
  // let secondTextOpacity = useTransform(
  //   scrollY,
  //   [0, height / 4, height / 3],
  //   [0, 1, 0]
  // );
  // let thirdTextOpacity = useTransform(
  //   scrollY,
  //   [height / 2, height, height * 2 - height / 1.5],
  //   [0, 1, 0]
  // );

  // let firstImageOpacity = useTransform(
  //   scrollY,
  //   [0, height / 2, height / 1.2],
  //   [0, 1, 0]
  // );
  // let secondImageOpacity = useTransform(
  //   scrollY,
  //   [height, height * 2 - height / 2, (height * 2) / 1.2],
  //   [0, 1, 0]
  // );
  // let thirdImageOpacity = useTransform(
  //   scrollY,
  //   [height * 2, height * 3 - height / 2, (height * 3) / 1.12],
  //   [0, 1, 0]
  // );
  // let fourthImageOpacity = useTransform(
  //   scrollY,
  //   [height * 3, height * 4 - height / 2, (height * 4) / 1.12],
  //   [0, 1, 0]
  // );
  // let fifthImageOpacity = useTransform(
  //   scrollY,
  //   [height * 4, height * 5 - (height * 4) / 2, (height * 5) / 1.12],
  //   [0, 1, 0]
  // );

  // let firstRotate = useTransform(scrollY, [0, height], [-42, 42]);
  // let secondRotate = useTransform(scrollY, [height, height * 2], [-42, 42]);

  // let manyTextOpacity2 = useTransform(
  //   scrollY,
  //   [height * 2 - height / 2, height * 2, height * 3 - height / 1.5],
  //   [0, 1, 0]
  // );

  // let manyTextOpacity3 = useTransform(
  //   scrollY,
  //   [height * 3 - height / 2, height * 3, height * 4 - height / 1.5],
  //   [0, 1, 0]
  // );

  // let manyTextOpacity4 = useTransform(
  //   scrollY,
  //   [height * 4 - height / 2, height * 4, height * 5 - height / 1.5],
  //   [0, 1, 0]
  // );

  return (
    <MainLayout pageTitle="Projects">
      <NavScroll topTitle="Info" topLink="about" backTop={true} mobile="next" />
      <section id={styles.projects} className="projectContent">
        <div>
          <motion.p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>
        </div>
        <div>
          <Link to="/">
            <motion.div>
              <span>Jessica Watson</span>
            </motion.div>
            <motion.div>
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
            </motion.div>
          </Link>
        </div>
        <div>
          <Link to="/">
            <motion.div>
              <span>suri-ram</span>
            </motion.div>
            <motion.div>
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
            </motion.div>
          </Link>
        </div>
        <div>
          <Link to="/">
            <motion.div>
              <span>Nautilus</span>
            </motion.div>
            <motion.div>
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
            </motion.div>
          </Link>
        </div>
        <div>
          <Link to="/">
            <motion.div>
              <span>Nautilus</span>
            </motion.div>
            <motion.div>
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
            </motion.div>
          </Link>
        </div>
        <div>
          <Link to="/">
            <motion.div>
              <span>tes</span>
            </motion.div>
            <motion.div>
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
            </motion.div>
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
