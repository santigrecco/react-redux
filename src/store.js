import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import { chuckReducer } from './reducers/chuckNorrisReducer';
import reducer from './reducers'

const middleware = applyMiddleware(promise(), thunk, logger());

// console.log(reducer);

export default createStore(reducer, middleware);
