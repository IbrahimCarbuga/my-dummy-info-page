import React from 'react';
import { I18nextProvider } from 'react-i18next';
import './App.css';
import { AppRouter } from './components/AppRouter';
import i18n from "./i18n";

export const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
   <AppRouter/>
   </I18nextProvider>
  );
}

