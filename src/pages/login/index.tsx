
/*
* @Author: dushuai
* @Date: 2024-03-29 16:13:37
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-10 17:31:51
* @description: login
*/
import { useNavigate, useSearchParams } from 'react-router-dom';
import { message } from 'antd';

import { useSettings, useAppStore, useSelector } from '@/store';

function Login() {
  const [params, setParams] = useSearchParams();

  const navigate = useNavigate();

  function handleSet() {
    setParams({
      a: 'b'
    });
  }

  const { theme, SET_THEME } = useSettings(useSelector(['theme', 'SET_THEME']));

  const SET_TOKEN = useAppStore(state => state.SET_TOKEN);

  function handleLogin() {
    message.success('登陆成功');
    SET_TOKEN('test-tokentokentokentokentokentokentokentokentokentokentokentokentoken');
    navigate('/', { replace: true });
  }

  return (
    <>
      login query a =  {params.get('a')}

      <div>theme: {theme}</div>
      <button onClick={() => SET_THEME('light')}>
        theme
      </button>

      <button onClick={handleSet}>
        set
      </button>
      <br />
      <button onClick={() => navigate('/')}>
        返回
      </button>

      <button onClick={handleLogin}>
        登陆
      </button>
    </>
  );
}

export default Login;
