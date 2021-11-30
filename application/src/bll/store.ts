import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { basketReducer } from './reducers/basketReducer';
import { registReducer } from './reducers/registrationReducer';

const rootReducer = combineReducers({
  registration: registReducer,
  basketReducer
});

/* eslint-disable no-underscore-dangle */
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
/* eslint-enable */
export type AppStateType = ReturnType<typeof rootReducer>;
// @ts-ignore
window.store = store;
export default store;
