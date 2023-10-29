// gitprofile.config.js

const config = {
  github: {
    username: 'ramonpjls', // Cambia esto al nombre de usuario de GitHub de Ramon
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // Estos proyectos no se mostrarán. Ejemplo: ['mi-proyecto1', 'mi-proyecto2']
    },
  },
  social: {
    linkedin: 'ramon-padilla-825644146/',
    twitter: 'RamonPdllx',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: 'https://ramonpjls.github.io/', // Puedes añadir el sitio web de Ramon si lo tiene.
    phone: '',
    email: 'ramonpjls@gmail.com',
  },
  resume: {
    fileUrl: '', // Puedes proporcionar la URL de su currículum si lo tienes en línea.
  },
  skills: [
    'JavaScript',
    '.NET',
    'Relation and non-relational DB',
    'Microservices',
  ],
  experiences: [
    {
      company: 'Cerveceria Nacional Dominicana',
      position: 'Web Developer',
      from: 'Jun/2021',
      to: 'Actual',
      companyLink: '',
    },
    {
      company:
        'Oficina Gubernamental de la Tecnologia de la informacion y comunicacion (OGTIC)',
      position: 'Web Developer',
      from: 'Jan/2022',
      to: 'Actual',
      companyLink: '', // Agrega el enlace de la empresa si lo tienes.
    },
  ],
  certifications: [
    {
      name: 'Scrum Professional Certificate',
      body: 'CertiProf',
      year: '2020',
      link: '', // Agrega el enlace a la certificación si lo tienes en línea.
    },
  ],
  education: [
    {
      institution: 'Pontificia Universidad Católica Madre y Maestra',
      degree: 'Web Development Tecnico Superior',
      from: '2021',
      to: 'Actual',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    // {
    //   title: 'Project Name',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //   imageUrl: 'https://via.placeholder.com/250x250',
    //   link: 'https://example.com',
    // },
    // {
    //   title: 'Project Name',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //   imageUrl: 'https://via.placeholder.com/250x250',
    //   link: 'https://example.com',
    // },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    // source: 'dev', // medium | dev
    // username: 'arifszn', // to hide blog section, keep it empty
    // limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

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
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ☕❤️`,
};

export default config;
