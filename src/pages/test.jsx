import * as React from "react";
import MainLayout from "../components/layout/mainLayout";
import * as styles from "../styles/modules/test.module.scss";

const InfoPage = () => {
  return (
    <MainLayout>
      <div id={styles.test} >
        <section>test</section>
        <section> <div /></section>
        <section> <div /></section>
        <section> <div /></section>
        <section>test</section>
        <div className={styles.fixed}> black</div>
      </div>
    </MainLayout>
  );
};

export default InfoPage;
