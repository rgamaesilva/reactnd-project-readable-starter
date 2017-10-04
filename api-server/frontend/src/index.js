import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
// import { createStore } from 'redux'
// import reducer from './reducers'
// import { Provider } from 'react-redux'

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_()
// )

ReactDOM.render(
  <BrowserRouter>
      <App/>
  </BrowserRouter>,
   document.getElementById('root'));
registerServiceWorker();
