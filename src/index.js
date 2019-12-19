import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import * as Redux from 'redux';
import CounterReducer from './store/reducers/counter';
import ResultsReducer from './store/reducers/results';

import { Provider } from 'react-redux';

const reducers=Redux.combineReducers({
    counter: CounterReducer,
    results: ResultsReducer
});


//const store=Redux.createStore(reducer);
const store=Redux.createStore(reducers);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
