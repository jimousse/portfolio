import gameImg from '../../img/projects/2dgame.png';
import portofolioImg from '../../img/projects/portfolio.png';
import realEstateImg from '../../img/projects/real-estate.png';
import natoursImg from '../../img/projects/natours.png';
import hotelApp from '../../img/projects/hotel-app.png';
import nodeRestApi from '../../img/projects/rest-api.png';

export const projectsData = [
  {
    title: 'Social Media REST API',
    description: 'Node REST API for a social media client created with Express, MongoDB/Mongoose.',
    img: nodeRestApi,
    github: 'https://github.com/jimousse/node-rest-api'
  },
  {
    title: 'This portofolio',
    description: 'Website you are currently looking at. Built with React and Sass only.',
    img: portofolioImg,
    github: 'https://github.com/jimousse/portfolio'
  },
  {
    title: '2D Game',
    description: 'This is a tile-based game concept using HTML5 <canvas>. Built with JavaScript and LitElement.',
    img: gameImg,
    github: 'https://github.com/jimousse/2DGame',
    demo: 'https://jimousse.github.io/2DGame/'
  },
  {
    title: 'Hotel Domstraat',
    description: 'CSS project focusing on Flexbox.',
    img: hotelApp,
    github: 'https://github.com/jimousse/hotel-app',
    demo: 'https://jimousse.github.io/hotel-app/'
  },
  {
    title: 'Nature Tours App',
    description: 'CSS project focusing on float layouts.',
    img: natoursImg,
    github: 'https://github.com/jimousse/nature-tour-app',
    demo: 'https://jimousse.github.io/nature-tour-app/'
  },
  {
    title: 'Real Estate App',
    description: 'CSS project focusing on Grid.',
    img: realEstateImg,
    demo: 'https://jimousse.github.io/real-estate-app/',
    github: 'https://github.com/jimousse/real-estate-app'
  }

];