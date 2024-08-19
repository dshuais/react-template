/*
 * @Author: dushuai
 * @Date: 2024-03-29 16:17:20
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-19 22:09:31
 * @description: 路由表
 */
import { ComponentType, lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { LoginAction, LoginLoader, LogoutAction, ProtectedLoader, RootLoader } from '@/permission';
import UserLayout from '@/layouts/userLayout';

// eslint-disable-next-line react-refresh/only-export-components
const BasicsLayout = lazy(() => import('@/layouts/basics'));

export type Module = {
  [keys in string]: () => Promise<{ default: ComponentType<any>; }>
}

/**
 * 所有pages下页面文件
 */
export const modules = import.meta.glob('@/pages/*/index.tsx') as unknown as Module;

const dynamicRoutes: RouteObject[] = [
  {
    id: 'Home',
    index: true,
    Component: lazy(modules[getPath('home')]),
    handle: {
      title: '首页',
      roles: ['admin', 'other']
    },
    loader: ProtectedLoader
  },
  {
    id: 'Home2',
    path: '/home2',
    Component: lazy(modules[getPath('home2')]),
    handle: {
      title: '首页',
      roles: ['admin', 'other']
    },
    loader: ProtectedLoader
  }
];

/**
 * 路由表
 */
const routes: RouteObject[] = [
  {
    id: 'root',
    path: '/',
    Component: BasicsLayout,
    loader: RootLoader,
    children: [...dynamicRoutes]
  },
  {
    path: '/user',
    Component: UserLayout,
    children: [
      {
        index: true,
        Component: lazy(modules[getPath('home2')]),
        handle: {
          title: '首页',
          roles: ['admin', 'other']
        }
      }
    ]
  },
  {
    path: '/login',
    loader: LoginLoader,
    action: LoginAction,
    Component: lazy(modules[getPath('login')])
  },
  {
    path: '*',
    Component: lazy(modules[getPath('error')])
  },
  {
    path: '/logout',
    action: LogoutAction
  }
];

export default routes;

/**
 * 获取页面路径
 * @param name
 * @returns
 */
export function getPath(name: string) {
  return `/src/pages/${name}/index.tsx`;
}
