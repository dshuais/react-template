/*
 * @Author: dushuai
 * @Date: 2023-04-03 14:33:53
 * @LastEditors: dushuai
 * @LastEditTime: 2024-04-03 10:12:45
 * @description: 统一处理报错
 */
import type { AxiosResponse } from "axios";
import { appActions } from '@/store'
import { useNavigate } from "react-router-dom"
import { message } from 'antd'

/** 不需要token的接口列表 */
const noTokenUrl: string[] = ['app/main/getToken']
/** 报错需要跳转降级页的状态码 -500 */
const to404Url: number[] = []

/**
 * 统一处理报错
 * @param {AxiosResponse} response 请求响应参数
 */
export default (response: AxiosResponse): void => {
  const code: number = response.data.code,
    url: string = response.config.url as string

  if (code === 200) { // 正常

  } else if (code === 401 && !noTokenUrl.includes(url)) { // 401未登录
    console.log('登陆失败err:>> ', url)
    // 清除token
    appActions.resetToken()
    const navigate = useNavigate()
    navigate('/login', { replace: true })

  } else if (to404Url.includes(code)) { // 跳降级页
    window.location.href = '/404'

  } else {
    // console.log('请求失败err:>> ', response.data);
    message.error(response.data.msg)
  }

}
