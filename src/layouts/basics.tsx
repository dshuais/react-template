/*
 * @Author: dushuai
 * @Date: 2024-04-07 10:25:43
 * @LastEditors: dushuai
 * @LastEditTime: 2024-04-07 18:01:03
 * @description: BasicsLayout
 */

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { appStore } from "@/store";
import { useEffect } from "react";
import { useSnapshot } from "valtio";

export default function BasicsLayout() {

  const { pathname } = useLocation();
  const navigate = useNavigate();

  console.log(pathname);

  const { token } = useSnapshot(appStore)

  useEffect(() => {
    if (!token) {
      navigate('/login', { replace: true })
      return
    }
  }, [pathname, token])

  return (
    <Outlet />
  )
}
