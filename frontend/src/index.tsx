import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
//style
import './styles/style.scss';
//state
import { Provider } from 'react-redux';
import store from './state/store'
//components
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
