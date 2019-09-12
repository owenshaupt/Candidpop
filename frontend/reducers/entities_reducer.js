import { combineReducers } from 'redux';
import { usersReducer } from './users_reducer';
import itemsReducer from './items_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  items: itemsReducer
});

export default entitiesReducer;