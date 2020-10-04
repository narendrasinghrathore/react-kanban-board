import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from './reducer';

const middleware = applyMiddleware(thunk);

const enhancers = [middleware];
const composedEnhancers: any =
    process.env.NODE_ENV !== "production"
        ? composeWithDevTools(...enhancers)
        : compose(...enhancers);
const store = createStore(reducer, composedEnhancers);
export default store;