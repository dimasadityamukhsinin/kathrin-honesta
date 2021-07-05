import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PortableText from "react-portable-text";

// Layout
import MainLayout from "../components/layout/mainLayout";
import NavScroll from "../components/navScroll";

// Css
import * as styles from "../styles/modules/projects.module.scss";

// Function
import { useAppContext } from "../context/store";
import { transition } from "../utils/transition";

// Register Plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ProjectsPage = ({ data }) => {
  const context = useAppContext();
  const textRef = React.useRef();
  const contentRef = React.useRef();
  const imageRef = React.useRef(new Array());

  React.useEffect(() => {
    // console.log(data.projects.edges);
    // Fungsi transisi
    transition({
      content: contentRef,
      text: textRef,
      image: imageRef,
      type: "projects",
    });
  }, []);

  return (
    <MainLayout pageTitle="Projects">
      <NavScroll topTitle="Info" topLink="about" backTop={true} />
      <div id={styles.projects} ref={contentRef}>
        <section className={styles.nChange}>
          <div>
            <PortableText content={data.openClose._rawTop} />
          </div>
        </section>
        {data.projects.edges.map((data, id) => (
          <section ref={(el) => imageRef.current.push(el)} key={id}>
            <Link to={`/projects/${data.node.slug.current}`}>
              <GatsbyImage
                image={data.node.thumb.asset.gatsbyImageData}
                alt={data.node.name}
                loading="eager"
                objectFit="contain"
                style={{ maxHeight: "100%" }}
                onMouseEnter={() => context.cursorChangeHandler("hovered")}
                onMouseLeave={() => context.cursorChangeHandler("")}
              />
              <span>{data.node.name}</span>
            </Link>
          </section>
        ))}
        <section className={styles.nChange}>
          <div>
            <PortableText content={data.openClose._rawFooter} />
          </div>
        </section>
        <div className={styles.fixed}>
          <div ref={textRef}>
            {data.projects.edges.map((data, id) => (
              <span key={id}>{data.node.name}</span>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export const query = graphql`
  query {
    projects: allSanityProjectList {
      edges {
        node {
          name
          slug {
            current
          }
          thumb {
            asset {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
    openClose: sanityProjects {
      _rawTop
      _rawFooter
    }
  }
`;

export default ProjectsPage;
