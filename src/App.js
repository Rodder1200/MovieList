import React from 'react';
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Provider from "react-redux/es/components/Provider";
import GeneralStore from "./GeneralStore";
import './App.css';
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
