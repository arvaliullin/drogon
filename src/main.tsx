import * as React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './pages/main-page/main-page';
import { Provider } from 'react-redux';
import store from './store';

import './index.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MainPage />
    </Provider>
  </React.StrictMode>
);
