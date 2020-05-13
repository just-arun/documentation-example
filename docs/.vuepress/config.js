module.exports = {
  title: "LeapJS",
  description: "Light weight framework for nodejs",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    logo: "/assets/images/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/v1/guide/" },
      {
        text: "version",
        ariaLabel: "Language Menu",
        items: [
          { text: "v1", link: "/v1/guide/" },
          { text: "v2", link: "/v2/guide/" },
        ],
      },
    ],
    sidebar: ["/v1/guide/", "/v1/guide/schema"],
  },
};
