module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Positive Systems",
    menuLinks: [
      {
        name: "home",
        link: "/",
      },
      {
        name: "Absen PL3.9",
        link: "/equipment/polaris",
      },
      {
        name: "Absen AT5",
        link: "/equipment/at5",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sass",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {},
        failOnError: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/images`,
      },
    },
  ],
};
