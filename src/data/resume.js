export const educationEntries = [
  {
    date: '2013 - 2017',
    schoolName: 'Telecom ParisTech',
    diploma: 'Master of Science in Engineering',
    description: 'Among the highest ranked French Grandes Ecoles, Telecom ParisTech is considered as the leading one in Computer Sience and Information Technology in France. Majored in Web Engineering and Data Science.',
    location: 'Paris, France',
    country: 'FR'
  },
  {
    date: '2016 - 2017',
    schoolName: 'KTH Royal Institute of Technology',
    diploma: 'Erasmus Exchange',
    description: 'Main courses: artifial intelligence, machine learning, data mining, computer encryption.',
    location: 'Stockholm, Sweden',
    country: 'SW'
  },
  {
    date: '2010 - 2013',
    schoolName: 'Lycée Fénelon',
    diploma: 'Classe Préparatoire aux Grandes Ecoles, MPSI, MP*',
    description: 'Highly selective training for national competitive entrance exams to leading French “Grandes Écoles”. Intense training in mathematics and physics.',
    location: 'Paris, France',
    country: 'FR'
  }
];

export const experienceEntries = [
  {
    date: '2019 - Present',
    companyName: 'ServiceNow',
    title: 'Senior Software Engineer',
    description: 'Working on the Now Design System at ServiceNow. Building Data Visualisations with D3.',
    location: 'Amsterdam, Netherlands',
    country: 'NL',
    duration: '3 yr 11 mos',
    responsibilitiesHeader: 'My responsibilities include:',
    responsibilities: [
      'Developing a JavaScript charting library for the Now Platform, using D3',
      'Working closely with designers and product owners to develop powerful, beautiful and accessible data visualisations',
      'Packaging our charts into reusable and light web components using the Now UI Framework',
      'Point of contact for other teams at ServiceNow who want to integrate our library into the end product',
      'Supporting other developers from app teams and constantly fixing bugs to improve the quality of our code'
    ],
    tools: [ 'JavaScript', 'D3', 'Sass', 'Web Components' ],
    isCurrent: true
  },
  {
    date: '2017 – 2019',
    title: 'Software Engineer',
    description: 'I worked on the Performance Analytics and Reporting product and was the frontend team lead for timeseries charts integration into the product.',
    tools: [ 'JavaScript', 'React', 'Redux', 'Webpack', 'Java', 'Highcharts', 'Enzyme', 'Jest' ],
    responsibilities: [
      'Integrated and componentized, using React, timeseries visualizations, supported other teams, maintained the project and actively transferred knowledge to my teammates and new hires',
      'Supervised the migration from Highcharts to in-house D3 chart library, evaluated risks of regression and mismatch, architectural changes, gathered business and technical requirements and worked closely with product owners, quality engineers and UX designers',
      'Participated in a global company Hackathon, won 1st place in EMEA and 3rd globally'
    ]
  },
  {
    date: '2016',
    companyName: 'Amadeus',
    title: 'Software Engineer Intern',
    description: 'Mobile Development Internship in the R&D Payment Department.',
    responsibilitiesHeader: 'What I achieved:',
    responsibilities: [
      'Built hybrid mobile applications that perform payments using QR Code',
      'Development of a payment Android SDK',
      'Development of several Cordova plugins'
    ],
    tools: [ 'JavaScript', 'Ionic', 'PhoneGap', 'Angular', 'Android', 'Java' ],
    location: 'Madrid, Spain',
    country: 'ES',
    duration: '6 mos'
  },
  {
    date: '2015 – 2016',
    companyName: 'IBM',
    title: 'Software Engineer Intern',
    description: 'Worked in the QA team on IBM Decision Optimization on Cloud (DOcloud).',
    location: 'Nice, France',
    tools: [ 'Python', 'Java', 'Docker', 'Linux' ],
    responsibilitiesHeader: 'What I achieved:',
    responsibilities: [
      'Collaborated with a team of 10+ senior engineers',
      'Evaluated possible solutions to contain unsafe code',
      'Used Docker to execute unsafe Python code in a cloud architecture',
      'Implemented a cloud component in Java, responsible of solving Python models, in a test driven development approach'
    ],
    country: 'FR',
    duration: '6 mos'
  }
];

export const skillItems = [
  { label: 'JavaScript', class: 'js' },
  { label: 'Data visualisations', class: 'datavis' },
  { label: 'D3.js', class: 'datavis' },
  { label: 'React', class: 'react' },
  { label: 'CSS', class: 'css' },
  { label: 'SASS', class: 'sass' },
  { label: 'LitElement', class: 'embed' },
  { label: 'NodeJS', class: 'node' },
  { label: 'Design Systems', class: 'embed' },
  { label: 'SQL/MySQL', class: 'database' },
  { label: 'Multi-cultural mindset', class: 'international' },
  { label: 'Team player', class: 'team' }
];