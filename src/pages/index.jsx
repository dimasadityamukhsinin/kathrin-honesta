import * as React from "react";
import MainLayout from "../components/layout/mainLayout";
import * as styles from "../styles/modules/landing.module.scss";

const IndexPage = () => {
  return (
    <MainLayout>
      <section id={styles.landing} data-scroll-container>
        <p>LANDING PAGE</p>
      </section>
    </MainLayout>
  );
};

export default IndexPage;
