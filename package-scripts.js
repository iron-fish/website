module.exports = {
  scripts: {
    updateLinks: {
      description: "Update '/src/pages/links.js' based on 'linktree'",
      script: "node update-links.js",
    },
    docusaurus: "docusaurus",
    start: "docusaurus start",
    build: {
      docs: "docusaurus build",
      script: "nps updateLinks build.docs",
    },
    swizzle: "docusaurus swizzle",
    deploy: "docusaurus deploy",
    serve: "docusaurus serve",
  },
}
