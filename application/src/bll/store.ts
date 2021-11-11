import { combineReducers, createStore } from 'redux';
import { registReducer } from './reducers/registrationReducer';

const rootReducer = combineReducers({ registration: registReducer });

export const store = createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>;

store.subscribe(() => {
  localStorage.setItem(
    'email',
    JSON.stringify(store.getState().registration.email)
  );
  localStorage.setItem(
    'password',
    JSON.stringify(store.getState().registration.password)
  );
});

// @ts-ignore
window.store = store;

export default store;
