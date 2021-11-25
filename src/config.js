// config.js
module.exports = {
    github: {
        username: 'remolive', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 8, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'olivier-rémy-b5a456110',
        twitter: '',
        facebook: '',
        dribbble: '',
        behance: '',
        medium: '',
        devto: '',
        website: 'https://remolive.github.io',
        phone: '',
        email: 'olivier.remyy@gmail.com'
    },
    skills: [
        'Ruby',
        'Sinatra',
        'Rails',
        'PostgreSQL',
        'JavaScript',
        'Jquery',
        'React.js',
        'CSS',
        'Git',
        'Docker',
        'AWS'
    ],
    experiences: [
        {
            company: 'Stootie HALTAE',
            position: 'Ruby Developer',
            from: 'September 2020',
            to: 'Present'
        },
        {
            company: 'RingCentral Engage Digital',
            position: 'Jr. Ruby Developer',
            from: 'April 2019',
            to: 'June 2020'
        },
        {
            company: 'RingCentral Engage Digital',
            position: 'Jr. Golang Developer',
            from: 'September 2018',
            to: 'January 2019'
        },
        {
            company: 'Slaask',
            position: 'Jr. Ruby Developer',
            from: 'October 2016',
            to: 'July 2017'
        }
    ],
    education: [
        {
            institution: 'EPITECH',
            degree: 'IT Master',
            from: '2018',
            to: '2019'
        },
        {
            institution: 'EPITECH',
            degree: 'IT Bachelor',
            from: '2015',
            to: '2017',
        }
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: '', // medium | dev.to
        username: '',
        limit: 2 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        id: '' // Please remove this and use your own tag id or keep it empty
    },
    hotjar: {
        id: '', //  Please remove this and use your own id or keep it empty
        snippetVersion : 6
    },
    themeConfig: {
        default: 'light',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}
