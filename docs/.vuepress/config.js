module.exports = {
  title: "LeapJS",
  description: "Light weight framework for nodejs",
  head: [["link", { rel: "icon", href: "/assets/images/logo.png" }]],
  themeConfig: {
    logo: "/assets/images/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
    ],
    sidebar: {
      "/guide/": ["", "schema"],
    },
    repo: "just-arun/documentation-example",
    repoLabel: "Contribute!",
    docsRepo: "just-arun/documentation-example",
    docsDir: "docs",
    docsBranch: "master",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    lastUpdated: "Last Updated",
    smoothScroll: true
  },
  base: '/documentation-example/'
};
