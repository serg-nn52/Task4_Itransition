import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import './index.css';
import App from './containers/App';
import { BrowserRouter } from 'react-router-dom';
import ruRU from 'antd/lib/locale/ru_RU';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ConfigProvider locale={ruRU}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </Provider>,
);
