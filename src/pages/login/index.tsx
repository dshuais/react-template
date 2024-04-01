
/*
* @Author: dushuai
* @Date: 2024-03-29 16:13:37
 * @LastEditors: dushuai
 * @LastEditTime: 2024-04-01 16:40:55
* @description: login
*/
import { useLocation, useNavigate, useNavigation, useParams, useSearchParams } from "react-router-dom"
import { useSnapshot } from 'valtio'
import { setStore, setActions } from '@/store'

function Login() {
  const [params, setParams] = useSearchParams()
  const p = useParams()
  const location = useLocation()
  const navigation = useNavigation()
  const navtive = useNavigate()

  console.log(p);

  console.log(location);

  console.log(navigation);

  function handleSet() {
    setParams({
      a: 'b'
    })
  }

  const { theme } = useSnapshot(setStore)

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
      <button onClick={() => navtive('/')}>
        返回
      </button>
    </>
  )
}

export default Login
