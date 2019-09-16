import { combineReducers } from 'redux';
import { usersReducer } from './users_reducer';
import { usersShowReducer } from './users_show_reducer';
import itemsReducer from './items_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  userShow: usersShowReducer,
  items: itemsReducer
});

export default entitiesReducer;