import React, { } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import {combineReducers,createStore} from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './components/reducer/rootReducer'
import historyReducer from './components/reducer/historyReducer'

import './assets/css/main.scss'

const rootReducers = combineReducers({
    rootReducer,
    historyReducer
})
const store = createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
)
ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById('root'));

