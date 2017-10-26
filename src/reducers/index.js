import { combineReducers } from 'redux';
import { stack } from './stack';
import { memory } from './memory';

export const rootReducer = combineReducers({
  stack,
  memory,
});
