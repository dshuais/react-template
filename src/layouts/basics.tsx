/*
 * @Author: dushuai
 * @Date: 2024-04-07 10:25:43
 * @LastEditors: dushuai
 * @LastEditTime: 2024-04-28 15:28:56
 * @description: BasicsLayout
 */

import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAppStore } from '@/store';
import { useEffect } from 'react';
import Loading from '@/components/Loading';

export default function BasicsLayout() {

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const token = useAppStore(state => state.token);

  useEffect(() => {
    if(!token) {
      navigate('/login', { replace: true });
      return;
    }
  }, [pathname, token]);

  if(!token) {
    return <Loading />;
  }

  return (
    <Outlet />
  );
}
