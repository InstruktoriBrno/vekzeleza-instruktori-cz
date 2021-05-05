const sass = require('sass');

module.exports = {
    siteMetadata: {
        title: 'Věk železa',
        description: 'Zažij 10 dní ve středověké vesničce',
        author: 'Tvrz',
        lang: 'cs',
        year: 2021,
        email: 'vekzeleza@instruktori.cz',
        fbEvent: '760855861208372',
        form: {
            action: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSd2RZtTd8rq-lNkI2e2HtcjMCI3j_QlhbZyWEAsa9E454y2Ag/formResponse',
            fields: {
                name: 'entry.1094078680',
                email: 'entry.1612418585',
                message: 'entry.726464845',
            }
        },
        summary: [
            {label: 'Věk', value: '17\u201325'},
            {label: 'Termín', value: '13.\u201322.\u00A08.\u00A02021'},
            {label: 'Cena', value: '3250\u00A0Kč'},
        ],
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    'G-3YW3QH1VJT', // Google Analytics / GA
                ],
                gtagConfig: {
                    anonymize_ip: true,
                },
            }
        },
        'gatsby-plugin-typegen',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-fontawesome-css',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Věk železa 13.\u201322.\u00A08.\u00A02021',
                short_name: 'Věk železa',
                description: 'Zažij 10 dní ve středověké vesničce',
                start_url: '/',
                background_color: '#f1d7b2',
                theme_color: '#cd9b27',
                display: 'minimal-ui',
                icon: 'src/images/favicon.png',
            },
        },
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                implementation: sass,
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: ['remark-czech-preprocessor'],
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'text',
                path: `${__dirname}/src/text`,
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
                name: 'team',
                path: `${__dirname}/src/team`,
            },
        },
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: [
                    'Proza Libre',
                    'MedievalSharp',
                ],
                display: 'swap',
            }
        },
    ],
};
