
/*
* @Author: dushuai
* @Date: 2024-03-29 16:13:37
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-19 21:42:49
* @description: login
*/
import { useNavigate, useSearchParams, useSubmit } from 'react-router-dom';

import { useSettings, useSelector } from '@/store';

function Login() {
  const [params, setParams] = useSearchParams();
  const sumbit = useSubmit();

  const navigate = useNavigate();

  function handleSet() {
    setParams({
      a: 'b'
    });
  }

  const { theme, SET_THEME } = useSettings(useSelector(['theme', 'SET_THEME']));

  function handleLogin() {
    // SET_TOKEN('test-tokentokentokentokentokentokentokentokentokentokentokentokentoken');
    // navigate('/', { replace: true });
    const token = 'test-tokentokentokentokentokentokentokentokentokentokentokentokentoken';
    sumbit({ token, redirectTo: params.get('from') || '/' }, { method: 'post', replace: true });
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
      <br />
      <button onClick={() => navigate('/user')}>user</button><br />
      <button onClick={() => navigate('/user/user2')}>user2</button><br />
      <button onClick={() => navigate('/user/user3')}>user3</button><br />
      <button onClick={() => navigate('/home2')}>home2</button><br />
    </>
  );
}

export default Login;
