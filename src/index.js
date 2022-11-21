import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import 'antd/dist/reset.css';
import '@/index.css';

dayjs.locale('zh-cn');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

