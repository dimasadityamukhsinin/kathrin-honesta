import { graphql, Link } from "gatsby";
import React, { useEffect, useRef } from "react";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import PortableText from "react-portable-text";

// Layout
import MainLayout from "../components/layout/mainLayout";
import NavScroll from "../components/navScroll";

// Css
import * as styles from "../styles/modules/about.module.scss";

// Function
import { useAppContext } from "../context/store";
import { transition } from "../utils/transition";

const AboutPage = ({ data }) => {
  const context = useAppContext();
  const contentRef = useRef(new Array());

  useEffect(() => {
    // Fungsi transisi
    transition({
      content: contentRef,
      type: "all",
    });
  }, []);

  return (
    <MainLayout pageTitle="About">
      <NavScroll topTitle="Close" topLink="projects" />
      <section id={styles.about}>
        <div />
        <div ref={(el) => contentRef.current.push(el)}>
          <PortableText content={data.sanityAbout._rawTitle} />
        </div>
        <div>
          <span>Selected Clients</span>
          <div
            className={styles.clients}
            ref={(el) => contentRef.current.push(el)}
          >
            {data.sanityAbout.selected_clients.map((data, id) => (
              <GatsbyImage
                image={data.image.asset.gatsbyImageData}
                alt={data.name}
                placeholder="blurred"
                loading="eager"
                objectFit="contain"
              />
            ))}
          </div>
          <span>Press</span>
          <div className={styles.press}>
            {data.sanityAbout.press.map((data, id) => (
              <a
                href={data.link}
                target="_blank"
                onMouseEnter={() => context.cursorChangeHandler("hovered")}
                onMouseLeave={() => context.cursorChangeHandler("")}
                key={id}
              >
                {data.name}
              </a>
            ))}
          </div>
          <span>Contact</span>
          <div className={styles.contact}>
            {data.sanityAbout.contact.map((data, id) => (
              <a
                href={data.link}
                target="_blank"
                onMouseEnter={() => context.cursorChangeHandler("hovered")}
                onMouseLeave={() => context.cursorChangeHandler("")}
                key={id}
              >
                {data.name}
              </a>
            ))}
          </div>
          <span>{data.sanityAbout.footer}</span>
        </div>
      </section>
    </MainLayout>
  );
};

export const query = graphql`
  query {
    sanityAbout {
      _rawTitle
      selected_clients {
        name
        image {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      press {
        name
        link
      }
      contact {
        name
        link
      }
      footer
    }
  }
`;

export default AboutPage;
