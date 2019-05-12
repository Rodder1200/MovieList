import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import './App.css';
import rootReducer from './reducers/rootReducer';
import MainComponent from './components/MainComponent';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
