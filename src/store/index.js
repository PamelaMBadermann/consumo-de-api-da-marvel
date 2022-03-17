import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import { characterReducer } from './modules/characters/reducer';

const combinedReducers = combineReducers({
  character: characterReducer
});

export const store = createStore(
  combinedReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
