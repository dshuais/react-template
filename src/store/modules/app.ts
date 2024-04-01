/*
 * @Author: dushuai
 * @Date: 2024-04-01 15:35:04
 * @LastEditors: dushuai
 * @LastEditTime: 2024-04-01 15:59:45
 * @description: App基础store
 */
import { proxy, subscribe } from 'valtio'

type AppStore = {
  token: string
}

/**
 * default app store
 * @returns AppStore
 */
const getAppStore = (): AppStore => ({
  token: 'default'
})

/**
 * app store
 */
export const appStore = proxy(
  JSON.parse(sessionStorage.getItem('app-store') as string) || getAppStore()
)

/**
 * actions
 */
export const appActions = {
  setToken(token: string) {
    appStore.token = token
  }
}

/**
 * 订阅AppStore变化
 * 持久化处理
 */
subscribe(appStore, () => {
  sessionStorage.setItem('app-store', JSON.stringify(appStore))
})
