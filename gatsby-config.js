module.exports = {
  siteMetadata: {
    author: "Leon Feng",
    description: "The official website of Lisiumi LLC",
    siteUrl: "https://lisiumi.com",
    title: "Lisiumi",
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-120221594-1",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Lisiumi",
        short_name: "Lisiumi",
        start_url: "/",
        background_color: "#facb23",
        theme_color: "#393939",
        display: "standalone",
        icon: "src/images/icon.png",
        crossOrigin: "use-credentials",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-eslint",
    "gatsby-plugin-layout",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    "gatsby-plugin-preact",
    "gatsby-plugin-preload-fonts",
  ],
};
