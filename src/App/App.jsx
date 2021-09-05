import React from 'react';
import { Provider } from 'react-redux';
import MainNavigation from '../components/MainNavigation/MainNavigation';
import store from '../state/store';
import { CssBaseline } from '@material-ui/core'
import './global.css';

export default function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <MainNavigation />
    </Provider>
  );
}