/*
 * @Author: dushuai
 * @Date: 2024-03-29 12:30:24
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-29 16:25:31
 * @description: main入口
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router'
import { RouterProvider } from 'react-router-dom'
import './assets/style/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
