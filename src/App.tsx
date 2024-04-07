/*
 * @Author: dushuai
 * @Date: 2024-04-07 11:36:37
 * @LastEditors: dushuai
 * @LastEditTime: 2024-04-07 18:02:17
 * @description: App 路由 鉴权组件
 */
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Suspense, useEffect } from "react";
import Loading from "@/components/Loading";
import { appStore, permisActions } from "./store";
import { useSnapshot } from "valtio";

export default function App() {

  const { token } = useSnapshot(appStore)

  useEffect(() => {
    if (token) {
      permisActions.GenerateRoutes()
        .then(res => {
          console.log(router.routes, res);
        })
    }
  }, [token])

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
