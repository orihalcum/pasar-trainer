import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router';
import { Provider } from "react-redux";
import store from "./store";
import 'antd/dist/antd.less';
import './scss/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
