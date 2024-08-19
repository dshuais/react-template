/*
 * @Author: dushuai
 * @Date: 2024-04-07 11:36:37
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-19 21:47:09
 * @description: App 路由
 */
import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';

import Loading from '@/components/Loading';

import router from './router';

export default function App() {

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
