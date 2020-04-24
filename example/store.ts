import { testKey, testReducer } from './../reducers/testReducer';
/**
 * [exports description]
 * @author lei on 2017/12/21
 */

import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import promiseThunkMiddleware from 'redux-promise-thunk-v1';

const rootReducer = combineReducers({
    [testKey]: testReducer,
    // ${storeCombine}
});

const middlewares = [
    promiseThunkMiddleware,
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const storeEnhancers = composeEnhancers(
    applyMiddleware(...middlewares),
);

const store = createStore(rootReducer, storeEnhancers);

export default store;
