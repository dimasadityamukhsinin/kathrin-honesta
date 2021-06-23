import { StaticImage } from "gatsby-plugin-image";
import React, { useRef, useEffect } from "react";

// Layout
import MainLayout from "../components/layout/mainLayout";
import NavScroll from "../components/navScroll";

// Css
import * as styles from "../styles/modules/projectsDetail.module.scss";

// Function
import { transition } from "../utils/transition";

const ProjectsDetail = (props) => {
  const contentRef = useRef(new Array());

  useEffect(() => {
    // Fungsi transisi
    transition({
      content: contentRef,
      type: "all",
    });
  }, []);

  return (
    <MainLayout pageTitle="Kathrin Projects">
      <NavScroll
        topTitle="Back to Projects"
        topLink="projects"
        backTop={true}
        prev={props.pageContext.prev}
        next={props.pageContext.next}
      />
      <div id={styles.projectsDetail}>
        <section ref={(el) => contentRef.current.push(el)}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Kathrin
            Honesta short biography on the website.
          </p>
        </section>
        <section className={styles.content}>
          <p ref={(el) => contentRef.current.push(el)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Kathrin
            Honesta short biography on the website.
          </p>
          <p ref={(el) => contentRef.current.push(el)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Kathrin
            Honesta short biography on the website.
          </p>
          <p ref={(el) => contentRef.current.push(el)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            dignissim dolor sem, vitae posuere augue accumsan nec. Curabitur
            congue nunc et tellus laoreet tempor. Integer molestie facilisis
            tortor ut tempus. Sed quis efficitur erat. Nunc lobortis urna massa,
            nec posuere dui fermentum pulvinar. Donec fermentum vel arcu sit
            amet aliquet. Sed dapibus id nulla ut pharetra. Duis ultricies odio
            sit amet odio commodo, ac pharetra purus elementum. Sed non nibh sit
            amet sapien rutrum sollicitudin.
            <br />
            <br />
            Nulla quis rutrum mi, id aliquet orci. Morbi tempus in risus nec
            rhoncus. Duis eu nisi facilisis, iaculis diam tincidunt, egestas
            nulla. Nunc feugiat tellus et congue vehicula. Proin vestibulum
            metus in finibus ullamcorper. Nulla ac hendrerit mauris, placerat
            ornare dolor. Cras vitae ante eu tellus varius lacinia sed et nisl.
            Donec ornare, lacus ac sodales hendrerit, mi ante efficitur metus,
            non suscipit nisi justo a massa. Aenean eu tellus tincidunt,
            interdum ligula vitae, suscipit ante. In tempor urna nec orci
            malesuada euismod non ac tellus. Integer consequat cursus mi, id
            finibus dolor accumsan sed. Nulla facilisi.
          </p>
          <div ref={(el) => contentRef.current.push(el)}>
            <StaticImage
              src="../images/jessica watson_final.webp"
              alt="Jessica Watson"
              placeholder="blurred"
              loading="eager"
              objectFit="contain"
              className="portrait"
              style={{ maxHeight: "100%" }}
            />
          </div>
          <div ref={(el) => contentRef.current.push(el)}>
            <StaticImage
              src="../images/Nursery_1.webp"
              alt="suri-ram"
              placeholder="blurred"
              loading="eager"
              objectFit="contain"
              className="landscape"
              style={{ maxHeight: "100%" }}
            />
          </div>
          <p ref={(el) => contentRef.current.push(el)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            dignissim dolor sem, vitae posuere augue accumsan nec. Curabitur
            congue nunc et tellus laoreet tempor. Integer molestie facilisis
            tortor ut tempus. Sed quis efficitur erat. Nunc lobortis urna massa,
            nec posuere dui fermentum pulvinar. Donec fermentum vel arcu sit
            amet aliquet. Sed dapibus id nulla ut pharetra. Duis ultricies odio
            sit amet odio commodo, ac pharetra purus elementum. Sed non nibh sit
            amet sapien rutrum sollicitudin.
          </p>
        </section>
      </div>
    </MainLayout>
  );
};

export default ProjectsDetail;
