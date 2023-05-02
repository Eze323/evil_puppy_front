import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/*"start": "react-scripts --openssl-legacy-provider start",
    "build": "react-scripts --openssl-legacy-provider build",*/
 import { BrowserRouter } from 'react-router-dom';
 import { Provider } from 'react-redux';
// // eslint-disable-next-line
 import store from './redux/store';
 import axios from 'axios';

 //axios.defaults.baseURL= 'http://localhost:3001';
 axios.defaults.baseURL= 'https://evilpuppyback-evil-puppy.up.railway.app/';
 export const ruthApp='https://evilpuppyback-evil-puppy.up.railway.app'


ReactDOM.render(

     <Provider store={store}>
    <BrowserRouter> 
    <App />
     </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

