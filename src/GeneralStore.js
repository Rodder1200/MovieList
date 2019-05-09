import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import indexReducer from './indexReducer';

const GeneralStore = () => {
  return createStore(indexReducer, composeWithDevTools(applyMiddleware(thunk)));
};

export default GeneralStore;
