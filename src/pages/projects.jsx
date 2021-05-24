import { Link } from "gatsby";
import React, { useEffect, useRef } from "react";
import MainLayout from "../components/layout/mainLayout";
import * as styles from "../styles/modules/projects.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import NavScroll from "../components/navScroll";
import { useInView } from "react-intersection-observer";
import ProjectSection from "../components/projectSection";

const ProjectsPage = () => {
  const contentRef = useRef();

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      console.log(window.scrollY)
    }, false);
  },[])

  return (
    <MainLayout pageTitle="Projects">
      <NavScroll topTitle="Info" topLink="about" backTop={true} />
      {/* <div style={{ height: "100vh" }}> */}
      <section id={styles.projects} data-scroll-container>
        <div ref={contentRef}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        {/* <ProjectSection
          link="/"
          titile="Jessica Watson"
          image="../images/jessica watson_final.webp"
        />
        <ProjectSection
          link="/"
          titile="suri-ram"
          image="../images/Nursery_1.webp"
        />
        <ProjectSection
          link="/"
          titile="Nautilus"
          image="../images/nautilus.webp"
        /> */}
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
              />
            </div>
          </Link>
        </div>
        <div>
          <p>©2020 Kathrin Honesta.</p>
        </div>
      </section>
      {/* </div> */}
    </MainLayout>
  );
};

export default ProjectsPage;
