
/*
* @Author: dushuai
* @Date: 2024-03-29 16:13:37
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-29 18:36:28
* @description: login
*/
import { useLocation, useNavigate, useNavigation, useParams, useSearchParams } from "react-router-dom"

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

  return (
    <>
      login query a =  {params.get('a')}

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
