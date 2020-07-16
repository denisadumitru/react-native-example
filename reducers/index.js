import {combineReducers} from 'redux';
import appState from './appState';

export const reducers = combineReducers({
  app: appState,
});
