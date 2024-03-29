/*
 * @Author: dushuai
 * @Date: 2024-03-29 16:17:20
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-29 16:18:10
 * @description: 路由表
 */
import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const Home = lazy(() => import('@/pages/home'))
const Login = lazy(() => import('@/pages/login'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  }
]

export default routes
