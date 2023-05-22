import React from 'react'; // 核心包
import ReactDOM from 'react-dom/client'; // 做渲染用的
import './index.css'; // 应用的全局样式文件
import App from './App'; // 根组件

const root = ReactDOM.createRoot(document.getElementById('root')); // 根root
root.render(
    // 严格模式节点，印象useEffect执行时机
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

