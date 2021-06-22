import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import exampleData from "../../exampleData.json";

// Layout
import MainLayout from "../components/layout/mainLayout";
import NavScroll from "../components/navScroll";

// Css
import * as styles from "../styles/modules/projects.module.scss";

// Function
import { useAppContext } from "../context/store";
import checkCursor from "../utils/checkCursor";
import topResize from "../utils/topResize";
import { transition } from "../utils/transition";

const ProjectsPage = () => {
  const context = useAppContext();
  const textRef = React.useRef();
  const contentRef = React.useRef();
  const imageRef = React.useRef(new Array());

  React.useEffect(() => {
    // Fungsi transisi
    transition({
      content: contentRef,
      text: textRef,
      image: imageRef,
      type: "projects"
    });

    // Check cursor
    checkCursor();
    window.addEventListener("resize", topResize, false);
    window.addEventListener("resize", checkCursor, false);
    return () => {
      window.removeEventListener("resize", checkCursor, false);
      window.removeEventListener("resize", topResize, false);
    };
  }, []);

  return (
    <MainLayout pageTitle="Projects">
      <NavScroll topTitle="Info" topLink="about" backTop={true} />
      <div id={styles.test} ref={contentRef}>
        <section className={styles.nChange}>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </section>
        <section ref={(el) => imageRef.current.push(el)}>
          <Link to="/">
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
            <span>Jessica Watson</span>
          </Link>
        </section>
        <section ref={(el) => imageRef.current.push(el)}>
          <Link to="/">
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
            <span>Suri-Ram</span>
          </Link>
        </section>
        <section ref={(el) => imageRef.current.push(el)}>
          <Link to="/">
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
            <span>Nautilus</span>
          </Link>
        </section>
        <section className={styles.nChange}>
          <div>
            <p>©2020 Kathrin Honesta.</p>
          </div>
        </section>
        <div className={styles.fixed}>
          <div ref={textRef}>
            {exampleData.map((data, id) => (
              <span key={id} className="test">
                {data.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProjectsPage;
