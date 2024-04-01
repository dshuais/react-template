/*
 * @Author: dushuai
 * @Date: 2024-03-29 16:10:20
 * @LastEditors: dushuai
 * @LastEditTime: 2024-04-01 16:07:46
 * @description: Home
 */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './index.module.css'
import { useSnapshot } from 'valtio'
import { appStore, appActions } from '@/store'

function App() {
  const [count, setCount] = useState(0)

  const navigate = useNavigate()

  function handleJumpLogin() {
    navigate('/login/7788?a=555', { state: { b: 666 } })
  }

  const { token } = useSnapshot(appStore)
  // const actions = useSnapshot(appActions)

  useEffect(() => {
    console.log(appStore);
  })

  return (
    <div className={styles.root}>
      <div>token: {token}</div>
      <button onClick={() => appActions.setToken('123')}>
        修改token
      </button>
      <div className="flex justify-center items-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className={`${styles.logo} ${styles.react}`} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={styles.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={handleJumpLogin}>
          jumpLogin
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles['read-the-docs']}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
