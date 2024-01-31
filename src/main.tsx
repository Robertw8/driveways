import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './components';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';

import { store } from './redux';
import { theme } from './styles';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Provider store={store}>
        <ConfigProvider theme={theme}>
          <App />
        </ConfigProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
