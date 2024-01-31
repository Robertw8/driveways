import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './components';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './styles/index.css';
import { store } from './redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
