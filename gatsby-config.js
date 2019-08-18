module.exports = {
  siteMetadata: {
    title: 'Sortd',
    description: 'Collaborative Organisational Change Management Platform',
    author: 'Sortd.io',
    siteUrl: `https://web.sortd.io`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-hotjar-tracking`,
      options: {
        includeInDevelopment: true,
        id: '1446639',
        sv: '6',
      },
    },

    {
      resolve: 'gatsby-plugin-intercom-spa',
      options: {
        app_id: 'wq7oaqfa',
        include_in_development: true,
      },
    },
    {
      resolve: 'gatsby-plugin-less',
      options: {
        javascriptEnabled: true,
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: '/docs',
        path: `${__dirname}/docs/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: '/blog',
        path: `${__dirname}/blog/`,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          '//rockt.us17.list-manage.com/subscribe/post?u=f11728abdca6d9c4e72f748bf&amp;id=3e22517e03', // add your MC list endpoint here; see instructions below
      },
    },

    {
      resolve: 'gatsby-transformer-remark-antd',
      options: {
        plugins: [
          'gatsby-remark-header-custom-ids',
          'gatsby-remark-img-warpper-p',
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              noInlineHighlight: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-145775006-1',
      },
    },
    `gatsby-plugin-netlify`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Sortd Website',
        short_name: 'Sortd Website',
        display: 'standalone',
        start_url: './?utm_source=homescreen',
        theme_color: '#002140',
        background_color: '#001529',
        icon: 'src/images/favicon.png',
      },
    },
    `gatsby-plugin-sitemap`,
  ],
};
