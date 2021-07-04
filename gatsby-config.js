module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Jourlog`,
    author: {
      name: `@mehrad4u`,
      summary: `I've got the right to make my own fresh mistakes and repeating fuck ups of the fathers.`,
    },
    description: `Where I log my life.`,
    siteUrl: `https://jourlog.xyz`,
    social: {
      twitter: `mehrad4u`,
    },
    defaultImage: "images/bg.jpeg",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-WX3HH87',
        includeInDevelopment: false,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mehrad Rousta`,
        short_name: `Jourlog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4fc4cf`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Shabnam'],
          urls: ['/fonts/fonts.css'],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    "gatsby-plugin-dark-mode",
    `gatsby-plugin-postcss`,
  ],
}
