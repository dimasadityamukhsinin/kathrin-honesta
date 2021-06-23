const path = require(`path`);
const exampleData = require("./exampleData.json");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  exampleData.forEach((data, id) => {
    if(id === 0) {
      createPage({
        path: `/projects/${data.slug}`,
        component: path.resolve("./src/templates/projectsDetail.jsx"),
        context: {
          slug: data.slug,
          prev: null,
          next: exampleData[id + 1].slug
        },
      });
    }else if(id + 1 === exampleData.length) {
      createPage({
        path: `/projects/${data.slug}`,
        component: path.resolve("./src/templates/projectsDetail.jsx"),
        context: {
          slug: data.slug,
          prev: exampleData[id - 1].slug,
          next: null
        },
      });
    }else {
      createPage({
        path: `/projects/${data.slug}`,
        component: path.resolve("./src/templates/projectsDetail.jsx"),
        context: {
          slug: data.slug,
          prev: exampleData[id - 1].slug,
          next: exampleData[id + 1].slug,
        },
      });
    }
  });
};
