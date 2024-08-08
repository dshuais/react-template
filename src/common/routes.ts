/*
 * @Author: dushuai
 * @Date: 2024-04-11 11:10:56
 * @LastEditors: dushuais 1137896420@qq.com
 * @LastEditTime: 2024-08-08 21:29:04
 * @description: 动态路由相关
 */

/**
 * 动态配置路由
 */
export const dynamicRoutes: App.Route[] = [
  {
    id: 'Home',
    path: '/',
    component: 'home',
    handle: {
      title: '首页',
      roles: ['admin', 'other']
    }
  },
  {
    id: 'Home2',
    path: '/home2',
    component: 'home2',
    handle: {
      title: '首页',
      roles: ['admin', 'other']
    }
  }
];
