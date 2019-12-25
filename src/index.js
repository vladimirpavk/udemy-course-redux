import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import * as Redux from 'redux';
import CounterReducer from './store/reducers/counter';
import ResultsReducer from './store/reducers/results';

import { Provider } from 'react-redux';

import ReduxThunk from 'redux-thunk';

const reducers=Redux.combineReducers({
    counter: CounterReducer,
    results: ResultsReducer
});

const actionLogger = (store)=>{
    return (next)=>{
      return (action)=>{
        console.log('[Middleware] ', action.type, action.payload);
        next(action);
        console.log('[Middleware]', store.getState());
      }
    }
  };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose;

const store=Redux.createStore(reducers, composeEnhancers(Redux.applyMiddleware(actionLogger, ReduxThunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
