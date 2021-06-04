import { graphql } from "gatsby";
import React, { useEffect, useRef } from "react";
import MainLayout from "../components/layout/mainLayout";
import * as styles from "../styles/modules/projects.module.scss";
import NavScroll from "../components/navScroll";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useAppContext } from "../context/store";

const ProjectsPage = ({ data }) => {
  const contentRef = useRef();
  const context = useAppContext();
  let heightMain, heightMain2, heightMain3, heightMain4;

  useEffect(() => {
    const main = document.getElementsByClassName("tes")[0].children;
    const height = main[1].clientHeight;
    const height2 = main[2].clientHeight;
    const height3 = main[3].clientHeight;

    main[1].children[0].children[0].style.transform = `translateY(-${
      (height * 2) / 2
    }px)`;
    main[1].children[0].children[1].style.transform = `translateY(-${Math.ceil(
      height / 25
    )}px)`;
    main[1].children[0].children[0].style.opacity = 0;

    main[2].children[0].children[0].style.transform = `translateY(-${
      (height2 * 2) / 2
    }px)`;
    main[2].children[0].children[1].style.transform = `translateY(-${Math.ceil(
      height2 / 25
    )}px)`;
    main[2].children[0].children[0].style.opacity = 0;

    main[3].children[0].children[0].style.transform = `translateY(-${
      (height3 * 2) / 2
    }px)`;
    main[3].children[0].children[1].style.transform = `translateY(-${Math.ceil(
      height3 / 25
    )}px)`;
    main[3].children[0].children[0].style.opacity = 0;

    main[4].children[0].style.transform = `translateY(-${height3 / 2}px)`;
    main[4].children[0].style.opacity = 0;

    // main[4].children[0].children[0].style.transform = `translateY(-${
    //   (height4 * 2) / 2
    // }px)`;
    // main[4].children[0].children[1].style.transform = `translateY(-${Math.ceil(
    //   height4 / 15
    // )}px)`;
    // main[4].children[0].children[0].style.opacity = 0;

    heightMain = main[1].getBoundingClientRect().height;
    heightMain2 = main[2].getBoundingClientRect().height;
    heightMain3 = main[3].getBoundingClientRect().height;

    document.addEventListener(
      "scroll",
      () => {
        const currentScroll = window.pageYOffset;
        const windowHeight = window.innerHeight || window.screen.height;
        let transform = 0;

        transform = Math.min(Math.abs(main[0].getBoundingClientRect().top), 25);
        main[0].children[0].style.transform = `translateY(-${Math.min(
          transform,
          25
        )}px)`;

        let opacity;
        let opacity3;
        if (
          currentScroll <=
          Math.ceil(main[0].getBoundingClientRect().height / 20)
        ) {
          opacity =
            1 - currentScroll / (main[0].getBoundingClientRect().height / 25);
          opacity3 =
            currentScroll / (main[0].getBoundingClientRect().height / 10);
        } else {
          opacity = 0;
        }
        main[0].children[0].style.opacity = `${opacity}`;
        main[1].children[0].children[0].style.opacity = `${opacity3}`;

        if (transform === 25) {
          //Opacity
          let opacity2;
          let opacity4;

          if (
            Math.abs(main[1].getBoundingClientRect().top - (heightMain - 25)) <=
            Math.ceil(main[1].getBoundingClientRect().height / 2)
          ) {
            opacity2 =
              1 -
              Math.abs(
                main[1].getBoundingClientRect().top - (heightMain - 25)
              ) /
                (main[1].getBoundingClientRect().height / 2.5);
            opacity4 = Math.min(
              Math.abs(
                main[1].getBoundingClientRect().top - (heightMain - 25)
              ) /
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
          main[1].children[0].children[1].style.opacity = `${opacity4}`;

          //TranslateY
          main[1].children[0].children[1].style.transform = `translateY(-${
            Math.ceil(height / 25) +
            Math.abs(main[1].getBoundingClientRect().top - (heightMain - 25))
          }px)`;
        }

        if (main[1].children[0].children[1].getBoundingClientRect().top <= 0) {
          //Opacity
          let opacity6, opacity7, opacity8;

          if (
            Math.abs(
              main[2].getBoundingClientRect().top - (heightMain2 - 25)
            ) <= Math.ceil(main[2].getBoundingClientRect().height / 2)
          ) {
            opacity6 =
              1 -
              Math.abs(
                main[2].getBoundingClientRect().top - (heightMain2 - 25)
              ) /
                (main[2].getBoundingClientRect().height / 2.5);
            opacity7 = Math.min(
              Math.abs(
                main[2].getBoundingClientRect().top - (heightMain2 - 25)
              ) /
                (main[2].getBoundingClientRect().height / 5),
              1
            );
          } else {
            opacity6 = 0;
          }
          if (opacity6 <= 0) {
            main[2].children[0].children[0].style.opacity = 0;
          } else {
            main[2].children[0].children[0].style.opacity = `${opacity6}`;
          }
          opacity8 =
            Math.abs(main[2].getBoundingClientRect().top - (heightMain2 - 25)) /
              (main[2].getBoundingClientRect().height / 5) -
            1;
          if (opacity8 <= 1) {
            if (opacity8 <= 0) {
              main[1].children[0].children[1].style.opacity = 0;
            } else {
              main[1].children[0].children[1].style.opacity = `${opacity8}`;
            }
          }
          main[2].children[0].children[1].style.opacity = `${opacity7}`;

          //TranslateY
          // main[2].children[0].children[1].style.transform = `translateY(-${
          //   Math.ceil(height2 / 15) +
          //   Math.abs(main[2].getBoundingClientRect().top - (heightMain2 - 25))
          // }px)`;
          // main[2].children[0].children[1].style.transform = `translateY(${
          //   Math.ceil(height2 / 15) -
          //   Math.min(
          //     Math.abs(
          //       main[1].children[0].children[1].getBoundingClientRect().top
          //     )
          //   ) /
          //     3
          // }px)`;

          main[2].children[0].children[1].style.transform = `translateY(-${
            Math.ceil(height2 / 25) +
            Math.abs(main[2].getBoundingClientRect().top - (heightMain2 - 25))
          }px)`;
          // console.log(
          //   Math.ceil(
          //     height2 / 15
          //   )
          // );
          // console.log(main[2].getBoundingClientRect().top)
          // console.log(Math.abs(
          //   main[2].getBoundingClientRect().top -
          //     (heightMain2 - main[2].getBoundingClientRect().height / 2)
          // ))
          // console.log(heightMain2 - main[2].getBoundingClientRect().height / 2)
          // console.log(heightMain2)
          // console.log(main[2].getBoundingClientRect().height / 2)
          // console.log(Math.ceil(main[2].getBoundingClientRect().height / 2))
          // if (
          //   Math.abs(
          //     main[2].getBoundingClientRect().top - (heightMain2 - 25)
          //   ) <= Math.ceil(main[2].getBoundingClientRect().height / 2)

          //   // Math.abs(
          //   //   main[2].getBoundingClientRect().top -
          //   //     (heightMain2 - main[2].getBoundingClientRect().height / 2)
          //   // ) <= Math.ceil(main[2].getBoundingClientRect().height / 2)
          // ) {
          //   opacity6 =
          //     1 -
          //     Math.abs(
          //       main[2].getBoundingClientRect().top - (heightMain2 - 25)
          //     ) /
          //       (main[2].getBoundingClientRect().height / 2.5);
          //   opacity7 = Math.min(
          //     Math.abs(
          //       main[2].getBoundingClientRect().top - (heightMain2 - 25)
          //     ) /
          //       (main[2].getBoundingClientRect().height / 5),
          //     1
          //   );
          // } else {
          //   opacity6 = 0;
          // }
          // opacity8 = Math.min(
          //   Math.abs(
          //     main[2].getBoundingClientRect().top -
          //       (heightMain2 - main[2].getBoundingClientRect().height / 2)
          //   ) /
          //     (main[2].getBoundingClientRect().height / 1.2),
          //   1
          // );
          // main[1].children[0].children[1].style.opacity = `${opacity6}`;
          // main[2].children[0].children[0].style.opacity = `${opacity7}`;
          // main[2].children[0].children[1].style.opacity = `${opacity8}`;

          // //Height
          // // main[2].children[0].children[1].style.transform = `translateY(-${
          // //   Math.ceil(height2 / 15) +
          // //   Math.abs(
          // //     main[2].getBoundingClientRect().top -
          // //       (heightMain2 - main[2].getBoundingClientRect().height / 1.2)
          // //   )
          // // }px)`;
          // main[2].children[0].children[1].style.transform = `translateY(-${
          //   Math.ceil(height2 / 15) +
          //   Math.abs(main[2].getBoundingClientRect().top - (heightMain2 - 25))
          // }px)`;
        }

        if (main[2].children[0].children[1].getBoundingClientRect().top <= 0) {
          //Opacity
          let opacity9, opacity10, opacity11;

          // console.log(Math.abs(
          //   main[3].getBoundingClientRect().top - (heightMain3 - 25)
          // ))

          // console.log(Math.ceil(main[3].getBoundingClientRect().height / 2))

          if (
            Math.abs(
              main[3].getBoundingClientRect().top - (heightMain3 - 25)
            ) <= Math.ceil(main[3].getBoundingClientRect().height / 2)
          ) {
            opacity9 =
              1 -
              Math.abs(
                main[3].getBoundingClientRect().top - (heightMain3 - 25)
              ) /
                (main[3].getBoundingClientRect().height / 2.5);
            opacity10 = Math.min(
              Math.abs(
                main[3].getBoundingClientRect().top - (heightMain3 - 25)
              ) /
                (main[3].getBoundingClientRect().height / 5),
              1
            );
          } else {
            opacity9 = 0;
          }
          if (opacity9 <= 0) {
            main[3].children[0].children[0].style.opacity = 0;
          } else {
            main[3].children[0].children[0].style.opacity = `${opacity9}`;
          }
          opacity11 =
            Math.abs(main[3].getBoundingClientRect().top - (heightMain3 - 25)) /
              (main[3].getBoundingClientRect().height / 5) -
            1;
          if (opacity11 <= 1) {
            if (opacity11 <= 0) {
              main[2].children[0].children[1].style.opacity = 0;
            } else {
              main[2].children[0].children[1].style.opacity = `${opacity11}`;
            }
          }
          main[3].children[0].children[1].style.opacity = `${opacity10}`;

          // TranslateY
          main[3].children[0].children[1].style.transform = `translateY(-${
            Math.ceil(height3 / 25) +
            Math.abs(main[3].getBoundingClientRect().top - (heightMain3 - 25))
          }px)`;
        }

        if (main[3].children[0].children[1].getBoundingClientRect().top <= 0) {
          //Opacity
          let opacity12, opacity13, opacity14;

          if (
            Math.abs(main[3].getBoundingClientRect().top - (heightMain3 - 50)) *
              2 <=
            Math.ceil(main[3].getBoundingClientRect().height / 2) * 2
          ) {
            opacity12 =
              1 -
              Math.abs(
                main[3].getBoundingClientRect().top - (heightMain3 - 50)
              ) /
                (main[3].getBoundingClientRect().height / 2.5);
            // opacity12 =
            //   1 -
            //   (Math.abs(
            //     main[3].getBoundingClientRect().top - (heightMain3 - 25)
            //   ) / 50) * 2 /
            //     (main[3].getBoundingClientRect().height / 2.5) *2;

            // opacity7 = Math.min(
            //   Math.abs(
            //     main[2].getBoundingClientRect().top - (heightMain2 - 25)
            //   ) /
            //     (main[2].getBoundingClientRect().height / 5),
            //   1
            // );
          } else {
            opacity12 = 0;
          }
          opacity13 = Math.min(
            Math.abs(main[3].getBoundingClientRect().top - (heightMain3 - 25)) /
              main[3].getBoundingClientRect().height,
            1
          );
          main[4].children[0].style.opacity = `${opacity13}`;
          // console.log(Math.min(Math.abs(
          //   main[3].getBoundingClientRect().top - (heightMain3 - 25)
          // ) /
          //   (main[3].getBoundingClientRect().height / 1.2), 1))

          console.log(opacity13);

          // console.log(Math.min(
          //   Math.abs(
          //     main[3].getBoundingClientRect().top - (heightMain3 - 25)
          //   ) /
          //     (main[3].getBoundingClientRect().height / 5))

          //640
          // console.log(
          //   Math.abs(
          //     main[3].getBoundingClientRect().top - (heightMain3 - 50)
          //   ) * 2)
          //626
          // console.log(Math.ceil(main[3].getBoundingClientRect().height / 2) * 2)
          // opacity14 =
          //   Math.abs(main[4].getBoundingClientRect().top - (heightMain3 - 25)) /
          //     (main[4].getBoundingClientRect().height / 5) -
          //   1;
          // if (opacity14 <= 1) {
          //   if (opacity14 <= 0) {
          //     main[3].children[0].children[1].style.opacity = 0;
          //   } else {
          //     main[3].children[0].children[1].style.opacity = `${opacity14}`;
          //   }
          // }
          // main[3].children[0].children[1].style.opacity = `${opacity13}`;

          // main[3].children[0].children[1].style.opacity = `${opacity10}`;

          // TranslateY
          // main[4].children[0].children[1].style.transform = `translateY(-${
          //   Math.ceil(height4 / 20) +
          //   Math.abs(main[4].getBoundingClientRect().top - (heightMain4 - 25))
          // }px)`;
        }

        // if (main[2].children[0].children[1].getBoundingClientRect().top <= 0) {
        //   //Opacity
        //   let opacity9, opacity10, opacity11;

        //   if (
        //     Math.abs(
        //       main[3].getBoundingClientRect().top - (heightMain3 - 25)
        //     ) <= Math.ceil(main[3].getBoundingClientRect().height / 2)
        //   ) {
        //     opacity9 =
        //       1 -
        //       Math.abs(
        //         main[3].getBoundingClientRect().top - (heightMain3 - 25)
        //       ) /
        //         (main[3].getBoundingClientRect().height / 2.5);
        //     opacity10 = Math.min(
        //       Math.abs(
        //         main[3].getBoundingClientRect().top - (heightMain3 - 25)
        //       ) /
        //         (main[3].getBoundingClientRect().height / 5),
        //       1
        //     );
        //   } else {
        //     opacity9 = 0;
        //   }
        //   if (opacity9 <= 0) {
        //     main[3].children[0].children[0].style.opacity = 0;
        //   } else {
        //     main[3].children[0].children[0].style.opacity = `${opacity9}`;
        //   }
        //   opacity11 =
        //     Math.abs(main[3].getBoundingClientRect().top - (heightMain3 - 25)) /
        //       (main[3].getBoundingClientRect().height / 5) -
        //     1;
        //   if (opacity11 <= 1) {
        //     if (opacity11 <= 0) {
        //       main[2].children[0].children[1].style.opacity = 0;
        //     } else {
        //       main[2].children[0].children[1].style.opacity = `${opacity11}`;
        //     }
        //   }

        //   //TranslateY
        //   main[3].children[0].children[1].style.transform = `translateY(-${
        //     Math.ceil(height2 / 15) +
        //     Math.abs(main[3].getBoundingClientRect().top - (heightMain3 - 25))
        //   }px)`;
        // }

        // if (main[2].children[0].children[1].getBoundingClientRect().top <= 0) {
        //   //Opacity
        //   let opacity8, opacity9;

        //   if (
        //     Math.abs(main[3].getBoundingClientRect().top - (heightMain3 - 25)) <=
        //     Math.ceil(main[3].getBoundingClientRect().height / 2)
        //   ) {
        //     opacity8 =
        //       1 -
        //       Math.abs(
        //         main[3].getBoundingClientRect().top - (heightMain3 - 25)
        //       ) /
        //         (main[3].getBoundingClientRect().height / 2.5);
        //     opacity9 = Math.min(
        //       Math.abs(
        //         main[3].getBoundingClientRect().top - (heightMain3 - 25)
        //       ) /
        //         (main[3].getBoundingClientRect().height / 5),
        //       1
        //     );
        //   } else {
        //     opacity8 = 0;
        //   }
        //   if (opacity8 <= 0) {
        //     main[3].children[0].children[0].style.opacity = 0;
        //   } else {
        //     main[3].children[0].children[0].style.opacity = `${opacity8}`;
        //   }
        //   main[3].children[0].children[1].style.opacity = `${opacity8}`;

        //   //TranslateY
        //   main[3].children[0].children[1].style.transform = `translateY(-${
        //     Math.ceil(height3 / 15) +
        //     Math.abs(main[3].getBoundingClientRect().top - (heightMain3 - 25))
        //   }px)`;
        // }

        // if (main[3].children[0].children[1].getBoundingClientRect().top <= 0) {
        //   //Opacity
        //   let opacity10, opacity11;

        //   if (
        //     Math.abs(main[4].getBoundingClientRect().top - (heightMain4 - 25)) <=
        //     Math.ceil(main[4].getBoundingClientRect().height / 2)
        //   ) {
        //     opacity10 =
        //       1 -
        //       Math.abs(
        //         main[4].getBoundingClientRect().top - (heightMain4 - 25)
        //       ) /
        //         (main[4].getBoundingClientRect().height / 2.5);
        //     opacity11 = Math.min(
        //       Math.abs(
        //         main[4].getBoundingClientRect().top - (heightMain4 - 25)
        //       ) /
        //         (main[4].getBoundingClientRect().height / 5),
        //       1
        //     );
        //   } else {
        //     opacity10 = 0;
        //   }
        //   if (opacity10 <= 0) {
        //     main[4].children[0].children[0].style.opacity = 0;
        //   } else {
        //     main[4].children[0].children[0].style.opacity = `${opacity10}`;
        //   }
        //   main[4].children[0].children[1].style.opacity = `${opacity10}`;

        //   //TranslateY
        //   main[4].children[0].children[1].style.transform = `translateY(-${
        //     Math.ceil(height4 / 15) +
        //     Math.abs(main[4].getBoundingClientRect().top - (heightMain4 - 25))
        //   }px)`;
        // }

        // if (main[2].children[0].children[1].getBoundingClientRect().top <= 0) {
        //   //Opacity
        //   let opacity9, opacity10, opacity11;
        //   //906
        //   // console.log(main[3].getBoundingClientRect().top)
        //   //31
        //   // console.log(
        //   //   Math.abs(
        //   //     main[3].getBoundingClientRect().top -
        //   //       (heightMain3 - main[3].getBoundingClientRect().height / 2)
        //   //   )
        //   // );
        //   // console.log(
        //   //   Math.abs(
        //   //     main[2].getBoundingClientRect().top -
        //   //       (heightMain2 - main[2].getBoundingClientRect().height / 2)
        //   //   )
        //   // );
        //   // console.log(heightMain3)
        //   // console.log(main[3].getBoundingClientRect().height / 2)
        //   // console.log(Math.ceil(main[3].getBoundingClientRect().height / 2))
        //   if (
        //     Math.abs(
        //       main[3].getBoundingClientRect().top -
        //         (heightMain3 - main[3].getBoundingClientRect().height / 2)
        //     ) <= Math.ceil(main[3].getBoundingClientRect().height / 2)
        //   ) {
        //     opacity9 =
        //       1 -
        //       Math.abs(
        //         main[3].getBoundingClientRect().top -
        //           (heightMain3 - main[3].getBoundingClientRect().height / 2)
        //       ) /
        //         (main[3].getBoundingClientRect().height / 2.5);
        //     opacity10 = Math.min(
        //       Math.abs(
        //         main[3].getBoundingClientRect().top -
        //           (heightMain3 - main[3].getBoundingClientRect().height / 2)
        //       ) /
        //         (main[3].getBoundingClientRect().height / 2),
        //       1
        //     );
        //   } else {
        //     opacity9 = 0;
        //   }
        //   opacity11 = Math.min(
        //     Math.abs(
        //       main[3].getBoundingClientRect().top -
        //         (heightMain3 - main[3].getBoundingClientRect().height / 2)
        //     ) /
        //       (main[3].getBoundingClientRect().height / 1.2),
        //     1
        //   );
        //   main[2].children[0].children[1].style.opacity = `${opacity9}`;
        //   main[3].children[0].children[0].style.opacity = `${opacity10}`;
        //   main[3].children[0].children[1].style.opacity = `${opacity11}`;

        //   //Height
        //   main[3].children[0].children[1].style.transform = `translateY(-${
        //     Math.ceil(height3 / 30) +
        //     Math.abs(
        //       main[3].getBoundingClientRect().top -
        //         (heightMain3 - main[3].getBoundingClientRect().height / 1.2)
        //     )
        //   }px)`;
        // }
      },
      false
    );
  }, []);

  return (
    <MainLayout pageTitle="Projects">
      <NavScroll topTitle="Info" topLink="about" backTop={true} mobile="next" />
      <section id={styles.projects} className="tes">
        <div ref={contentRef}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        {/* <TextSection
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectSection link="/" title="Jessica Watson" image={data.jessica} />
        <ProjectSection link="/" title="suri-ram" image={data.nursery} />
        <ProjectSection link="/" title="Nautilus" image={data.nautilus} /> */}
        <div>
          <Link to="/">
            <div>
              <span>Jessica Watson</span>
            </div>
            <div style={{ opacity: 0 }}>
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
            <div style={{ opacity: 0 }}>
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
            <div style={{ opacity: 0 }}>
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
