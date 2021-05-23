const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  createPage({
    path: `/projects/kathrin-projects`,
    component: path.resolve("./src/templates/projectsDetail.jsx"),
    context: {
      slug: "kathrin-projects",
    },
  });
};
