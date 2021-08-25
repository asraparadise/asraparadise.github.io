module.exports = {
    title: 'Asra Paradise',
    //tagline: 'All the tools you need to start building a modern WordPress project, using all the latest front end development tools.',
    tagline: 'An extremely friendly and fun, community discord server with active voice and text channels.',
    url: 'https://asraparadise.github.io',
    baseUrl: '/asraparadise-docs/',
    favicon: 'img/favicon.png',
    organizationName: 'asraparadise', // Usually your GitHub org/user name.
    projectName: 'asraparadise-docs', // Usually your repo name.
    scripts: [
        {
            src: 'https://buttons.github.io/buttons.js',
            async: true,
            defer: true,
        }
    ],
    themeConfig: {
        //gtag: {
        //    trackingID: 'GTM-P5GG5DH',
        //    anonymizeIP: true,
        //},
        disableDarkMode: true,
        navbar: {
            logo: {
                alt: 'Asra Paradise Logo',
                src: 'img/asraAnimated.gif',
            },
            links: [
                {
                    to: '/get-started',
                    activeBasePath: 'pages',
                    label: 'Get Started',
                    position: 'right',
                },
                {
                    to: 'docs/welcome',
                    activeBasePath: 'welcome',
                    label: 'Docs',
                    position: 'right',
                },
                {
                    to: '/storybook/',
                    activeBasePath: 'storybook',
                    label: 'Storybook',
                    position: 'right',
                },
                {
                    to: '/sass',
                    activeBasePath: 'sass',
                    label: 'Sass',
                    position: 'right',
                },
                {
                    to: '/showcase',
                    activeBasePath: 'showcase',
                    label: 'Showcase',
                    position: 'right',
                },
            ],
        },
        prism: {
            theme: require('prism-react-renderer/themes/dracula'),
            additionalLanguages: ['php'],
        },
        algolia: {
            apiKey: 'e33b6cc2ee0a9ef7f6942fcf299555bc',
            indexName: 'dev_asraparadise',
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                theme: {
                    customCss: require.resolve('./src/scss/application.scss'),
                },
            },
        ],
    ],
    plugins: [
        'docusaurus-plugin-sass',
        [
            '@docusaurus/plugin-sitemap',
            {
                cacheTime: 600 * 1000, // 600 sec - cache purge period
                changefreq: 'weekly',
                priority: 0.5,
                trailingSlash: false,
            },
        ],
    ],
    customFields: {
        keywords: [
            'wordpress tools',
            'development tools',
            'wordpress project',
            'Gutenberg blocks',
            'development kit',
            'wordpress kit'
        ],
        image: 'img-why-boilerplate@2x.png',
    }
};
