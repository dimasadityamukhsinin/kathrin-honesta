const path = require(`path`);
const exampleData = require("./exampleData.json");

exports.createPages = async ({ graphql, actions }) => {
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

  if(projects.data.allSanityProjectList.edges) {
    projects.data.allSanityProjectList.edges.forEach((data, id) => {
      console.log(data.node.slug.current)
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

  // exampleData.forEach((data, id) => {
  //   if (id === 0) {
  //     createPage({
  //       path: `/projects/${data.slug}`,
  //       component: path.resolve("./src/templates/projectsDetail.jsx"),
  //       context: {
  //         slug: data.slug,
  //         prev: null,
  //         next: exampleData[id + 1].slug,
  //       },
  //     });
  //   } else if (id + 1 === exampleData.length) {
  //     createPage({
  //       path: `/projects/${data.slug}`,
  //       component: path.resolve("./src/templates/projectsDetail.jsx"),
  //       context: {
  //         slug: data.slug,
  //         prev: exampleData[id - 1].slug,
  //         next: null,
  //       },
  //     });
  //   } else {
  //     createPage({
  //       path: `/projects/${data.slug}`,
  //       component: path.resolve("./src/templates/projectsDetail.jsx"),
  //       context: {
  //         slug: data.slug,
  //         prev: exampleData[id - 1].slug,
  //         next: exampleData[id + 1].slug,
  //       },
  //     });
  //   }
  // });
};
