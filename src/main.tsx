/*
 * @Author: dushuai
 * @Date: 2024-03-29 12:30:24
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-19 21:31:30
 * @description: main入口
 */
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './assets/style/index.css';

ReactDOM
  .createRoot(document.getElementById('root')!)
  .render(<React.StrictMode>
    <App />
  </React.StrictMode>);
