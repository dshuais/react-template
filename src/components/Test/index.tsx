/*
 * @Author: dushuai
 * @Date: 2024-04-11 16:27:35
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-19 21:45:25
 * @description: 心平气和
 */

import { memo } from 'react';

/**
 * mome 测试
 */
export default memo(function Test(props: { count?: number }) {

  return (
    <div>
      index
      count: {props.count}
    </div>
  );
});
