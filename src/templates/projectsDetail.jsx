import React from "react";
import MainLayout from "../components/layout/mainLayout";
import NavScroll from "../components/navScroll";

const ProjectsDetail = () => {
  return (
    <MainLayout pageTitle="Kathrin Projects">
      <NavScroll
        topTitle="Back to Projects"
        topLink="projects"
        backTop={true}
      />
      <section>
        <p>TEST</p>
      </section>
    </MainLayout>
  );
};

export default ProjectsDetail;
