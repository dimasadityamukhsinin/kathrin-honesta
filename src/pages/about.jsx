import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import MainLayout from "../components/layout/mainLayout";
import NavScroll from "../components/navScroll";
import * as styles from "../styles/modules/about.module.scss";

const AboutPage = () => {
  return (
    <MainLayout pageTitle="About">
      <NavScroll
        topTitle="Close"
        topLink="projects"
        botTitle="2020 © Kathrin Honesta"
      />
      <section id={styles.about} data-scroll-container>
        <div />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Kathrin
            Honesta short biography on the website.
          </p>
        </div>
        <div>
          <span>Selected Clients</span>
          <div className={styles.clients}>
            <div>
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
            <div>
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
          </div>
          <span>Press</span>
          <div className={styles.press}>
            <Link to="/">Youtube (2019)</Link>
            <Link to="/">FIMA (2018)</Link>
            <Link to="/">Tabloit Gadis (2017)</Link>
          </div>
          <span>Contact</span>
          <div className={styles.contact}>
            <Link to="/">hello@kathrinhonesta.com</Link>
            <Link to="/">behance.net</Link>
            <Link to="/">facebook.com</Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;
