import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import { paymentCardReducer } from './reducers/paymentCardReducer';
import { registrationReducer } from './reducers/registrationReducer';

const rootReducer = combineReducers({
  registrationReducer,
  cartReducer,
  paymentCardReducer
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

// @ts-ignore
if (window.Cypress) {
  // @ts-ignore
  window.store = store;
}
export default store;
