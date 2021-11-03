/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: "/portfolio",
  plugins: ['gatsby-plugin-react-helmet','gatsby-plugin-styled-components'],
  siteMetadata: {
    title: "Raj Kothari",
    titleTemplate: "%s · Portfolio",
    description:
      "Full Stack Developer | Machine Learning | MongoDb | Tech Writer | Mentor | Mobile Dev | Community Builder | Learner",
    url: "https://bit.ly/rajkothari634", // No trailing slash allowed!
    image: "/src/images/mlstartArticleBg.png", // Path to your image you placed in the 'static' folder
    
  },
}

const config = {
  siteMetadata: {
    title: `Raj Kotahri Portfolio`,
    description: `Full Stack Developer | Machine Learning | MongoDb | Tech Writer | Mentor | Mobile Dev | Community Builder | Learner`,
    author: `Raj Kothari`,
    siteUrl: `https://bit.ly/rajkothari634`,
    imageUrl: `https://i.ibb.co/LP8cqdd/rkimage.jpg`
  },
}