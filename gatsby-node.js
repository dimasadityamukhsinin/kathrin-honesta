const path = require(`path`);
const exampleData = require("./exampleData.json");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  exampleData.forEach((data) => {
    createPage({
      path: `/projects/${data.slug}`,
      component: path.resolve("./src/templates/projectsDetail.jsx"),
      context: {
        slug: data.slug,
      },
    });
  });
};
