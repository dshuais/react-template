/*
 * @Author: dushuai
 * @Date: 2024-03-29 18:14:56
 * @LastEditors: dushuai
 * @LastEditTime: 2024-04-13 23:11:27
 * @description: loading 组件
 */
import { useEffect, useMemo } from 'react';
import { useSetState } from 'ahooks';
import NProgress from 'nprogress';

import 'nprogress/nprogress.css';
import styles from './index.module.css';

export default function Loading() {

  const [state] = useSetState({
    type: TYPE.TWO
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      NProgress.start();
    }, 100);

    return () => {
      NProgress.done();
      clearTimeout(timer);
    };
  }, []);

  const Component = useMemo(() => {
    return state.type === TYPE.ONE ? LoadingOne : LoadingTwo;
  }, [state.type]);

  return (
    <Component />
  );
}

const TYPE = {
  ONE: 'one',
  TWO: 'two'
};

// 规则循环旋转
function LoadingOne() {
  return (
    <div className={styles.loading}>
      <div className={styles.loader}>
        <div className={styles.circle} />
        <div className={styles.circle} />
        <div className={styles.circle} />
        <div className={styles.circle} />
      </div>
    </div>
  );
}

// 不规则旋转
function LoadingTwo() {
  return (
    <div className={styles['loading-two']}>
      <div className={styles['loader-two']} />
    </div>
  );
}
