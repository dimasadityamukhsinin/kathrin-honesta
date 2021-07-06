import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { useRef, useEffect } from "react";
import PortableText from "react-portable-text";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Layout
import MainLayout from "../components/layout/mainLayout";
import NavScroll from "../components/navScroll";

// Css
import * as styles from "../styles/modules/projectsDetail.module.scss";

// Function
import { transition } from "../utils/transition";
import scrollToTop from "../utils/scrollToTop";
import { useAppContext } from "../context/store";

// Register Plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ProjectsDetail = (props) => {
  const context = useAppContext();
  const contentRef = useRef(new Array());

  useEffect(() => {
    // Fungsi transisi
    transition({
      content: contentRef,
      type: "all",
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        t.kill();
      });
    }
  }, []);

  return (
    <MainLayout pageTitle="Kathrin Projects">
      <NavScroll
        topTitle="Back to Projects"
        topLink="projects"
      />
      <div id={styles.projectsDetail} className="content">
        <section>
          <PortableText content={props.data.sanityProjectList._rawTitle} />
        </section>
        <section className={styles.content}>
          <div
            className={styles.text}
          >
            <PortableText
              content={props.data.sanityProjectList._rawDescription1}
            />
          </div>
          <div
            className={styles.text}
          >
            <PortableText
              content={props.data.sanityProjectList._rawDescription2}
            />
          </div>
          <div
            className={styles.text}
          >
            <PortableText
              content={props.data.sanityProjectList._rawDescription3}
            />
          </div>
          {props.data.sanityProjectList.images.map((data, id) => (
            <div ref={(el) => contentRef.current.push(el)} key={id}>
              <GatsbyImage
                image={data.image.asset.gatsbyImageData}
                alt={data.name}
                loading="eager"
                objectFit="contain"
                style={{ maxHeight: "100%" }}
              />
            </div>
          ))}
          <div
            className={styles.text}
          >
            <PortableText
              content={props.data.sanityProjectList._rawDescription4}
            />
          </div>
        </section>
        <section className={styles.footer}>
          <div>
            {props.pageContext.prev ? (
              <Link
                to={`/projects/${props.pageContext.prev}`}
                onMouseEnter={() => context.cursorChangeHandler("hovered")}
                onMouseLeave={() => context.cursorChangeHandler("")}
              >
                Previous Project
              </Link>
            ) : (
              <div />
            )}
            <button
              onClick={() => scrollToTop()}
              onMouseEnter={() => context.cursorChangeHandler("hovered")}
              onMouseLeave={() => context.cursorChangeHandler("")}
            >
              Back to Top
            </button>
            {props.pageContext.next ? (
              <Link
                to={`/projects/${props.pageContext.next}`}
                onMouseEnter={() => context.cursorChangeHandler("hovered")}
                onMouseLeave={() => context.cursorChangeHandler("")}
              >
                Next Project
              </Link>
            ) : (
              <div />
            )}
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export const query = graphql`
  query Projects($slug: String!) {
    sanityProjectList(slug: { current: { eq: $slug } }) {
      name
      slug {
        current
      }
      _rawTitle
      seo {
        seo_image {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        seo_description
      }
      _rawDescription1
      _rawDescription2
      _rawDescription3
      _rawDescription4
      images {
        name
        image {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

export default ProjectsDetail;
