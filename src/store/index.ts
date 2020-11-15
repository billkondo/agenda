import { combineReducers, createStore } from 'redux';

import { authenticationReducer } from './authentication';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
