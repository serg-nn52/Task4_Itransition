import React from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import './index.css';
import App from './containers/App';
import { BrowserRouter } from 'react-router-dom';
import ruRU from 'antd/lib/locale/ru_RU';
import { Provider } from 'react-redux';
import store from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ConfigProvider locale={ruRU}>
        <PersistGate loading={<h2>Идет загрузка...</h2>} persistor={persistor}>
          <App />
        </PersistGate>
      </ConfigProvider>
    </BrowserRouter>
  </Provider>,
);
