
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';



const rootel =  document.getElementById('root')

window.onload = () => {
  ReactDOM.render(<App/>, rootel);
};

registerServiceWorker();
