/*
 * @Author: dushuai
 * @Date: 2024-04-13 23:20:11
 * @LastEditors: dushuai
 * @LastEditTime: 2024-04-28 15:47:41
 * @Description: 枚举文件
 */

export const APP_KEY = 'react-template';

/**
 * 路由
 */
export enum Pages {
  Home = '/',
  Login = '/login',
  Error = '/error',
  Home2 = '/home2'
}

/**
 * store key
 */
export enum StoreKey {
  APP = `app-store-${APP_KEY}`,
  SETTINGS = `settings-store-${APP_KEY}`,
  PERMISSION = `permission-store-${APP_KEY}`,
}
