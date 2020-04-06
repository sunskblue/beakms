import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import 'antd/dist/antd.css';
import store from './store';
import { currentEnv, SENTRY_DSN } from './consts/env';
import * as Sentry from '@sentry/browser';
Sentry.init({ environment: currentEnv, dsn: SENTRY_DSN });

class App extends Component {
  componentDidCatch(error) {
    Sentry.captureException(error);
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
