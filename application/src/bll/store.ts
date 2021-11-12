import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { registReducer } from './reducers/registrationReducer';

const rootReducer = combineReducers({ registration: registReducer });

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppStateType = ReturnType<typeof rootReducer>;
// @ts-ignore
window.store = store;

export default store;
