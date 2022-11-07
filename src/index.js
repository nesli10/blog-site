import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "antd/dist/antd.min.css";
import { Provider } from 'react-redux';
// import { applyMiddleware, legacy_createStore as createStore} from 'redux';
import App from './App';
import { store } from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <App/>
  </Provider>
);

