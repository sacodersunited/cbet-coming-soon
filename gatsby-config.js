module.exports = {
  siteMetadata: {
    title: 'CBET Coming Soon',
    message: 'Current Students can access Canvas here:',
    pattern: 'Seigaiha',
    color: '#4c4c4c',
    titleFont: 'Righteous',
    messageFont: 'Roboto',
    social: [
      'https://www.facebook.com/CBETCOLLEGE/',
      'https://www.linkedin.com/school/cbetcollege/'
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-under-construction',
        short_name: 'Under Construction',
        start_url: '/',
        background_color: '#4c4c4c',
        theme_color: '#4c4c4c',
        display: 'standalone',
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-plugin-offline'
  ]
}
