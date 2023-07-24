import React from 'react';
import ReactDOM from 'react-dom/client';
/* 改变REM换算比例 */
import './index.less';
import 'lib-flexible';
/* antd-mobile-国际化 */
import { ConfigProvider } from 'antd-mobile';
import zhCN from 'antd-mobile/es/locales/zh-CN';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

/* 处理最大宽度 */
// (function () {
//   const handleMax = function handleMax() {
//     let html = document.documentElement,
//       deviceW = html.clientWidth,
//       root = document.getElementById('root');
      
//     root.style.maxWidth = "750px";

//     if (deviceW >= 750) {
//       html.style.fontSize = '75px';
//     }
//   };

//   handleMax();
// })();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider locale={zhCN}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>
);
