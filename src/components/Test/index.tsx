/*
 * @Author: dushuai
 * @Date: 2024-04-11 16:27:35
 * @LastEditors: dushuai
 * @LastEditTime: 2024-04-11 16:36:50
 * @description: 心平气和
 */

import { memo, useEffect } from "react"

/**
 * mome 测试
 */
export default memo(function Test(props: { count?: number }) {

  useEffect(() => {
    console.log('子组件useEffect')
  }, [])

  console.log('子组件');

  return (
    <div>
      index
      count: {props.count}
    </div>
  )
})
