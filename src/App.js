import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Routes from './routes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      { /* Coloca aqui o browser router e não no routes por causa da repetição de código do Header */ }
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
