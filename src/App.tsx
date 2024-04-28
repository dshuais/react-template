/*
 * @Author: dushuai
 * @Date: 2024-04-07 11:36:37
 * @LastEditors: dushuai
 * @LastEditTime: 2024-04-28 15:27:33
 * @description: App 路由 鉴权组件
 */
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Suspense, useEffect, useState } from "react";
import Loading from "@/components/Loading";
import { useAppStore, permisActions } from "./store";

export default function App() {

  const token = useAppStore(state => state.token)

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (token) {
      permisActions.GenerateRoutes()
        .then(() => {
          setVisible(true)
        })
    }
  }, [token])

  /**
   * 当动态路由添加完成 再渲染页面
   * 否则页面会渲染在添加路由之前导致白屏
   */
  if (!visible && token) {
    return <Loading />
  }

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
