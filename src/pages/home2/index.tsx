
/*
* @Author: dushuai
* @Date: 2024-03-29 16:13:37
 * @LastEditors: dushuai
 * @LastEditTime: 2024-04-28 16:31:08
* @description: login
*/
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';

import { useSettings } from '@/store';

function Login() {
  const [params, setParams] = useSearchParams();

  const navtivate = useNavigate();

  function handleSet() {
    setParams({
      a: 'b'
    });
  }

  // const { theme, SET_THEME } = useSettings()
  const theme = useSettings(state => state.theme);
  const SET_THEME = useSettings(state => state.SET_THEME);

  return (
    <>
      我是home2
      login query a =  {params.get('a')}

      <div>theme: {theme}</div>
      <button onClick={() => SET_THEME('light')}>
        theme
      </button>

      <button onClick={handleSet}>
        set
      </button>
      <br />
      <button onClick={() => navtivate('/')}>
        返回
      </button>

      <div>
        子页面
        <Outlet />
      </div>
    </>
  );
}

export default Login;
