import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';


const root =  document.getElementById('root');


ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,document.getElementById('root'));
