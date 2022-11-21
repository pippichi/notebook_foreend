import React, { Component } from 'react'

import Home from "@/pages/Home"
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import 'antd/dist/reset.css';
import '@/index.css';

dayjs.locale('zh-cn');

export default class App extends Component{

  render() {
    return (
      <div>
        <Home />
      </div>
    )
  }
}