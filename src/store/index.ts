import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { errorLogger } from 'error_handlers/error_logger';
import { crashReporter } from './crashReporter';

import { authenticationReducer } from './authentication';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

function errorHandler(error: Error) {
  errorLogger.log(error);
}

export const store = createStore(
  rootReducer,
  applyMiddleware(crashReporter(errorHandler), thunk)
);
