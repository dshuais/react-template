/*
 * @Author: dushuai
 * @Date: 2024-03-29 16:17:20
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-29 18:30:06
 * @description: 路由表
 */
import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const Home = lazy(() => import('@/pages/home'))
// const Login = lazy(() => import('@/pages/login'))
const ErrorElement = lazy(() => import('@/pages/error'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorElement />,
    // 使用嵌套路由需要在 父页面元素内加上 <Outlet /> 组件
    // children: [
    //   {
    //     path: 'child',
    //     element: <div>child</div>
    //   }
    // ]
  },
  {
    path: '/login/:id',
    // element: <Login />
    async lazy() {
      let { default: Login } = await import('@/pages/login')
      return { Component: Login }
    }
  }
]

export default routes
