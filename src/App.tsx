/*
 * @Author: dushuai
 * @Date: 2024-04-07 11:36:37
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-19 21:47:09
 * @description: App 路由
 */
import { RouterProvider } from 'react-router-dom';
import { Suspense, useEffect } from 'react';

import Loading from '@/components/Loading';

import router from './router';
import { useSelector } from './store';
import { usePermission } from './store/modules/permission';

export default function App() {

  const { GenerateRoutes } = usePermission(useSelector(['GenerateRoutes']));

  useEffect(() => {
    GenerateRoutes();
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
