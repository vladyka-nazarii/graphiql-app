import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import '@fontsource/roboto';

import { App } from './App';
// import { store } from './redux/store';
import './i18n';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Provider store={store}> */}
      <SnackbarProvider maxSnack={4}>
        <App />
      </SnackbarProvider>
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>,
);
