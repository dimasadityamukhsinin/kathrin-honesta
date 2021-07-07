import { graphql } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";

// Layout
import MainLayout from "../components/layout/mainLayout";

// Css
import * as styles from "../styles/modules/landing.module.scss";

const IndexPage = ({ data }) => {
  return (
    <MainLayout>
      <Helmet>
        <meta name='description' content={data.seo.seo.seo_description} />
        <meta name='image' content={data.seo.seo.seo_image.asset.url} />
        {/* <meta property='og:url' content="" /> */}
        <meta
          property='og:title'
          content={`Home ⟡ ${data.seo.webTitle}`}
        />
        <meta property='og:description' content={data.seo.seo.seo_description} />
        <meta property='og:image' content={data.seo.seo.seo_image.asset.url} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:title'
          content={`Home ⟡ ${data.seo.webTitle}`}
        />
        <meta name='twitter:description' content={data.seo.seo.seo_description} />
        <meta name='twitter:image' content={data.seo.seo.seo_image.asset.url} />
      </Helmet>
      <section id={styles.landing} data-scroll-container>
        <p>LANDING PAGE</p>
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
    seo: sanityGeneral {
      webTitle
      seo {
        seo_description
        seo_image {
          asset {
            url
          }
        }
      }
    }
  }
`;

export default IndexPage;
