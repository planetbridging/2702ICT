import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Nav from './components/nav';
import Thumb from './components/thumb';

ReactDOM.render(
  <React.StrictMode>
    <header>
      My Photo Album
      <button id="Login">Login</button>
    </header>

    <main>
      <nav>
        <Nav />
      </nav>

      

      <Thumb />
    </main>
    <footer>By Shannon Setter</footer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
