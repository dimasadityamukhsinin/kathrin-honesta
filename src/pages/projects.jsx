import { graphql } from "gatsby";
import React, { useEffect, useRef } from "react";
import MainLayout from "../components/layout/mainLayout";
import * as styles from "../styles/modules/projects.module.scss";
import NavScroll from "../components/navScroll";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useAppContext } from "../context/store";
import checkCursor from "../utils/checkCursor";

const ProjectsPage = ({ data }) => {
  const contentRef = useRef();
  const context = useAppContext();

  const transitionProjects = () => {
    let transform = 0;
    let opacity, opacity1;
    const currentScroll = window.pageYOffset;
    const main = contentRef.current.children;
    const height = main[0].clientHeight;

    transform = Math.min(Math.abs(main[0].getBoundingClientRect().top), 25);
    main[0].children[0].style.transform = `translateY(-${Math.min(
      transform,
      25
    )}px)`;

    for (let i = 0; i < main.length; i++) {
      if (i !== main.length - 1 && i !== 0) {
        main[i].children[0].children[0].style.transform = `translateY(-${
          (height * 2) / 2
        }px)`;
        main[
          i
        ].children[0].children[1].style.transform = `translateY(-${Math.ceil(
          height / 25
        )}px)`;
        main[i].children[0].children[0].style.opacity = 0;
      } else if (i === main.length - 1) {
        main[i].children[0].style.transform = `translateY(-${height / 2}px)`;
        main[i].children[0].style.opacity = 0;
      }
    }

    if (
      currentScroll <= Math.ceil(main[0].getBoundingClientRect().height / 20)
    ) {
      opacity =
        1 - currentScroll / (main[0].getBoundingClientRect().height / 25);
      opacity1 = currentScroll / (main[0].getBoundingClientRect().height / 10);
    } else {
      opacity = 0;
    }
    main[0].children[0].style.opacity = `${opacity}`;
    main[1].children[0].children[0].style.opacity = `${opacity1}`;

    if (transform === 25) {
      //Opacity
      let opacity2;
      let opacity3;

      if (
        Math.abs(main[1].getBoundingClientRect().top - (height - 25)) <=
        Math.ceil(main[1].getBoundingClientRect().height / 2)
      ) {
        opacity2 =
          1 -
          Math.abs(main[1].getBoundingClientRect().top - (height - 25)) /
            (main[1].getBoundingClientRect().height / 2.5);
        opacity3 = Math.min(
          Math.abs(main[1].getBoundingClientRect().top - (height - 25)) /
            (main[1].getBoundingClientRect().height / 5),
          1
        );
      } else {
        opacity2 = 0;
      }
      if (opacity2 <= 0) {
        main[1].children[0].children[0].style.opacity = 0;
      } else {
        main[1].children[0].children[0].style.opacity = `${opacity2}`;
      }
      main[1].children[0].children[1].style.opacity = `${opacity3}`;

      //TranslateY
      main[1].children[0].children[1].style.transform = `translateY(-${
        Math.ceil(height / 25) +
        Math.abs(main[1].getBoundingClientRect().top - (height - 25))
      }px)`;
    }

    for (let i = 0; i < main.length; i++) {
      if (i >= 1 && i < main.length - 2) {
        if (main[i].children[0].children[1].getBoundingClientRect().top <= 0) {
          //Opacity
          let opacity4, opacity5, opacity6;

          if (
            Math.abs(main[i + 1].getBoundingClientRect().top - (height - 25)) <=
            Math.ceil(main[i + 1].getBoundingClientRect().height / 2)
          ) {
            opacity4 =
              1 -
              Math.abs(
                main[i + 1].getBoundingClientRect().top - (height - 25)
              ) /
                (main[i + 1].getBoundingClientRect().height / 2.5);
            opacity5 = Math.min(
              Math.abs(
                main[i + 1].getBoundingClientRect().top - (height - 25)
              ) /
                (main[i + 1].getBoundingClientRect().height / 5),
              1
            );
          } else {
            opacity4 = 0;
          }
          if (opacity4 <= 0) {
            main[i + 1].children[0].children[0].style.opacity = 0;
          } else {
            main[i + 1].children[0].children[0].style.opacity = opacity4;
          }
          opacity6 =
            Math.abs(main[i + 1].getBoundingClientRect().top - (height - 25)) /
              (main[i + 1].getBoundingClientRect().height / 5) -
            1;
          if (opacity6 <= 1) {
            if (opacity6 <= 0) {
              main[i].children[0].children[1].style.opacity = 0;
            } else {
              main[i].children[0].children[1].style.opacity = `${opacity6}`;
            }
          }
          main[i + 1].children[0].children[1].style.opacity = `${opacity5}`;

          //TranslateY
          main[i + 1].children[0].children[1].style.transform = `translateY(-${
            Math.ceil(height / 25) +
            Math.abs(main[i + 1].getBoundingClientRect().top - (height - 25))
          }px)`;
        }
      } else if (i === main.length - 1) {
        if (
          main[i - 1].children[0].children[1].getBoundingClientRect().top <= 0
        ) {
          //Opacity
          let opacity10;

          opacity10 =
            Math.abs(main[i - 1].getBoundingClientRect().top - (height - 25)) /
              (main[i - 1].getBoundingClientRect().height / 5) -
            3;
          main[i].children[0].style.opacity = `${Math.min(opacity10, 1)}`;

          if (1 - opacity10 <= 0) {
            main[i - 1].children[0].children[1].style.opacity = 0;
          } else {
            main[i - 1].children[0].children[1].style.opacity = `${
              1 - opacity10
            }`;
          }
        }
      }
    }
  };

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
        if (contentRef.current) {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
          if (window.innerWidth <= 576) {
            mobile = true;
            const main = contentRef.current.children;

            main[0].children[0].removeAttribute("style");
            for (let i = 0; i < main.length; i++) {
              if (i >= 1 && i < main.length - 1) {
                main[i].children[0].children[0].removeAttribute("style");
                main[i].children[0].children[1].removeAttribute("style");
              } else if (i === main.length - 1)
                main[i].children[0].removeAttribute("style");
            }

            window.removeEventListener("scroll", transitionProjects, false);
          } else {
            mobile = false;
            const main = contentRef.current.children;
            const height = main[0].clientHeight;

            for (let i = 0; i < main.length; i++) {
              if (i >= 1 && i < main.length - 1) {
                main[
                  i
                ].children[0].children[0].style.transform = `translateY(-${
                  (height * 2) / 2
                }px)`;
                main[
                  i
                ].children[0].children[1].style.transform = `translateY(-${Math.ceil(
                  height / 25
                )}px)`;
                main[i].children[0].children[0].style.opacity = 0;
              } else if (i === main.length - 1) {
                main[i].children[0].style.transform = `translateY(-${
                  height / 2
                }px)`;
                main[i].children[0].style.opacity = 0;
              }
            }

            window.addEventListener("scroll", transitionProjects, false);
          }
        }
      },
      false
    );

    if (mobile === false) {
      const main = contentRef.current.children;
      const height = main[0].clientHeight;

      for (let i = 0; i < main.length; i++) {
        if (i >= 1 && i < main.length - 1) {
          main[i].children[0].children[0].style.transform = `translateY(-${
            (height * 2) / 2
          }px)`;
          main[
            i
          ].children[0].children[1].style.transform = `translateY(-${Math.ceil(
            height / 25
          )}px)`;
          main[i].children[0].children[0].style.opacity = 0;
        } else if (i === main.length - 1) {
          main[i].children[0].style.transform = `translateY(-${height / 2}px)`;
          main[i].children[0].style.opacity = 0;
        }
      }

      window.addEventListener("scroll", transitionProjects, false);
    } else {
      const main = contentRef.current.children;
      main[0].children[0].removeAttribute("style");

      for (let i = 0; i < main.length; i++) {
        if (i >= 1 && i < main.length - 1) {
          if (main[i].children[0]) {
            main[i].children[0].children[0].removeAttribute("style");
            main[i].children[0].children[1].removeAttribute("style");
          }
        } else if (i === main.length - 1) {
          main[i].children[0].removeAttribute("style");
        }
      }

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
      <section id={styles.projects} ref={contentRef}>
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
          <p>©2020 Kathrin Honesta.</p>
        </div>
        {/* <TextSection content="©2020 Kathrin Honesta." /> */}
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
