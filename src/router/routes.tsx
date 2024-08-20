/*
 * @Author: dushuai
 * @Date: 2024-03-29 16:17:20
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-19 22:09:31
 * @description: 路由表
 */
import { ComponentType, lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { LoginAction, LoginLoader, LogoutAction, RootLoader } from '@/permission';

// eslint-disable-next-line react-refresh/only-export-components
const BasicsLayout = lazy(() => import('@/layouts/basics'));

export type Module = {
  [keys in string]: () => Promise<{ default: ComponentType<any>; }>
}

/** 所有pages下页面文件 */
const pagesModules = import.meta.glob('@/pages/*/index.tsx') as unknown as Module;
/** 所有pages\*\router下嵌套页面文件 */
const nestModules = import.meta.glob('@/pages/*/router/*/index.tsx') as unknown as Module;
/** 所有页面文件 */
export const modules: Module = {
  ...pagesModules,
  ...nestModules
};

/**
 * 路由表
 */
const routes: RouteObject[] = [
  {
    id: 'root',
    path: '/',
    Component: BasicsLayout,
    loader: RootLoader,
    children: [] // ...dynamicRoutes
  },
  {
    path: '/user',
    Component: lazy(() => import('@/layouts/userLayout')),
    loader: RootLoader,
    children: [
      {
        path: '/user/user2',
        Component: lazy(modules[getPath('home')])
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
    // logout路由只用来退出登录，不展示页面
    path: '/logout',
    action: LogoutAction,
    Component: lazy(modules[getPath('error')])
  },
  {
    path: '*',
    Component: lazy(modules[getPath('error')])
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
