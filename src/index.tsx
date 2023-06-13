import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { ApolloProvider } from '@apollo/client';
import { ErrorBoundary } from 'react-error-boundary';

import '@fontsource/roboto';

import { App } from './App';
import { store } from './redux/store';
import { client } from './apollo/client';
import './i18n';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <BrowserRouter>
        <Provider store={store}>
          <SnackbarProvider maxSnack={4}>
            <ApolloProvider client={client}>
              <App />
            </ApolloProvider>
          </SnackbarProvider>
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
);
