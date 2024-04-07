
/*
* @Author: dushuai
* @Date: 2024-03-29 16:13:37
 * @LastEditors: dushuai
 * @LastEditTime: 2024-04-07 18:03:51
* @description: login
*/
import { useLocation, useNavigate, useNavigation, useParams, useSearchParams } from "react-router-dom"
import { useSnapshot } from 'valtio'
import { setStore, setActions, appActions } from '@/store'
import { message } from 'antd'

function Login() {
  const [params, setParams] = useSearchParams()
  const p = useParams()
  const location = useLocation()
  const navigation = useNavigation()
  const navtivate = useNavigate()

  console.log(p);

  console.log(location);

  console.log(navigation);

  function handleSet() {
    setParams({
      a: 'b'
    })
  }

  const { theme } = useSnapshot(setStore)

  function handleLogin() {
    appActions.setToken('test-token')
    message.success('登陆成功')
    navtivate('/', { replace: true })
  }

  return (
    <>
      login query a =  {params.get('a')}

      <div>theme: {theme}</div>
      <button onClick={() => setActions.setTheme('light')}>
        theme
      </button>

      <button onClick={handleSet}>
        set
      </button>
      <br />
      <button onClick={() => navtivate('/')}>
        返回
      </button>

      <button onClick={handleLogin}>
        登陆
      </button>
    </>
  )
}

export default Login
