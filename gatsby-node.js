const path = require(`path`);
const exampleData = require("./exampleData.json");

exports.createPages = async ({ graphql, actions, page }) => {
  const { createPage } = actions;

  const projects = await graphql(`
    {
      allSanityProjectList {
        edges {
          node {
            name
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (projects.data.allSanityProjectList.edges) {
    projects.data.allSanityProjectList.edges.forEach((data, id) => {
      if (id === 0) {
        createPage({
          path: `/projects/${data.node.slug.current}`,
          component: path.resolve("./src/templates/projectsDetail.jsx"),
          context: {
            slug: data.node.slug.current,
            prev: null,
            next: projects.data.allSanityProjectList.edges[id + 1].node.slug.current,
          },
        });
      } else if (id + 1 === projects.data.allSanityProjectList.edges.length) {
        createPage({
          path: `/projects/${data.node.slug.current}`,
          component: path.resolve("./src/templates/projectsDetail.jsx"),
          context: {
            slug: data.node.slug.current,
            prev: projects.data.allSanityProjectList.edges[id - 1].node.slug.current,
            next: null,
          },
        });
      } else {
        createPage({
          path: `/projects/${data.node.slug.current}`,
          component: path.resolve("./src/templates/projectsDetail.jsx"),
          context: {
            slug: data.node.slug.current,
            prev: projects.data.allSanityProjectList.edges[id - 1].node.slug.current,
            next: projects.data.allSanityProjectList.edges[id + 1].node.slug.current,
          },
        });
      }
    });
  }

  // if(page.path.startsWith('/404')) {
  //   page.layout= "./src/pages/404.js";
  // }

  // createPage({
  //   path: `/404.html`,
  //   component: path.resolve("./src/pages/404.js"),
  // })
};
