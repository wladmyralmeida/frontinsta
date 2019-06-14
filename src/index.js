import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './global.css' 

//Pega o elemento App, e bota dentro da div, com o id Root, dentro do index.html
ReactDOM.render(<App />, document.getElementById('root'));
