import { combineReducers } from 'redux';
import { stackReducer } from './stackReducer';
// import { memoryReducer } from './memoryReducer';

export const rootReducer = combineReducers({
  stack: stackReducer,
  // memory: memoryReducer,
});
