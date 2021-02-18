
import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';
import '../sass/main.scss';


// console.log('hello');
ReactDOM.render(
  <Container />,
  document.getElementById('root')
);

module.hot.accept();