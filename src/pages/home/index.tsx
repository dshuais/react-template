/*
 * @Author: dushuai
 * @Date: 2024-03-29 16:10:20
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-19 21:44:35
 * @description: Home
 */
import { Outlet, useFetcher } from 'react-router-dom';
import { Button } from 'antd';

import styles from './index.module.css';

function App() {

  const fetcher = useFetcher();

  function handleLogout() {
    fetcher.submit(null, { action: '/logout', method: 'post' });
  }

  return (
    <div className={styles.root}>
      <Button type="primary" danger onClick={handleLogout}>
          logout
      </Button>

      <div>
          子页面
        <Outlet />
      </div>
    </div>
  );
}

export default App;
