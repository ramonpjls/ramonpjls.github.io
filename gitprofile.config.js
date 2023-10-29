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
    linkedin: 'https://www.linkedin.com/in/ramon-padilla-825644146/',
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
    fileUrl:
      'https://drive.google.com/file/d/1GSBvfar-W7dqjynREfvgRwKM_Xu0kFJS/view?usp=sharing', // Puedes proporcionar la URL de su currículum si lo tienes en línea.
  },
  skills: [
    'JavaScript',
    'Python',
    'Relation and non-relational DB',
    'Microservices',
    '.NET',
  ],
  experiences: [
    {
      company: 'BMA consultores',
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
  // ... Otras secciones de tu archivo de configuración themeConfig: {
  defaultTheme: 'light',

  // Hides the theme change switch
  // Useful if you want to support a single color mode
  disableSwitch: false,

  // Should use the prefers-color-scheme media-query,
  // using user system preferences, instead of the hardcoded defaultTheme
  respectPrefersColorScheme: true,

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
};

export default config;
