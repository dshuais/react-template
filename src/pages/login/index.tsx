
/*
* @Author: dushuai
* @Date: 2024-03-29 16:13:37
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-19 21:42:49
* @description: login
*/
import { useSearchParams, useSubmit } from 'react-router-dom';

function Login() {
  const [params] = useSearchParams();
  const sumbit = useSubmit();

  function handleLogin() {
    const token = 'test-tokentokentokentokentokentokentokentokentokentokentokentokentoken';
    sumbit({ token, redirectTo: params.get('from') || '/' }, { method: 'post', replace: true });
  }

  return (
    <>
      <button onClick={handleLogin}>
        登陆
      </button>
    </>
  );
}

export default Login;
