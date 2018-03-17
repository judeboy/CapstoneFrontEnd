
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
import {observe, cardPosition} from './Components/Game'


const rootel =  document.getElementById('root')

observe((cardPosition)=>{
    ReactDOM.render(<App cardPosition={cardPosition}/>, rootel);
})

registerServiceWorker();
