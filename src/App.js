import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import './App.css';
import GeneralStore from "./GeneralStore";
import MainComponent from './Components/MainComponent';

const store = GeneralStore();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
