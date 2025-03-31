/*
 * @Author: dushuai
 * @Date: 2025-03-12 17:53:22
 * @LastEditors: dushuai
 * @LastEditTime: 2025-03-17 14:06:33
 * @description: 心平气和
 */

/**
 * App内数据类型
 */
declare namespace Common {
  type Children = {
    children: React.ReactNode
  }

  type BULID_TYPE = 'pc' | 'desktop'
}

/**
 * 配置文件类型
 */
declare namespace NodeJS {
  interface ProcessEnv {
    // 本地环境
    NEXT_PUBLIC_NOOD_ENV: string

    // 打包环境
    NEXT_PUBLIC_APP_ENV: string

    // 生产资源路径
    NEXT_PUBLIC_APP_RESOURCE_URL: string

    // 生产请求接口路径
    NEXT_PUBLIC_APP_BASE_URL: string

    // H5标题
    NEXT_PUBLIC_APP_TITLE: string

    // APPKEY
    NEXT_PUBLIC_APP_KEY: string,

    /** Dify api地址 */
    NEXT_PUBLIC_DIFY_API_URL: string
  }
}