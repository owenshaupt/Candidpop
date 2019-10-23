import { combineReducers } from "redux";
import { usersReducer } from "./users_reducer";
import { usersShowReducer } from "./users_show_reducer";
import followsReducer from "./follows_reducer";
import listItemFollowsReducer from "./list_item_follow_reducer";
import itemsReducer from "./items_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  userShow: usersShowReducer,
  items: itemsReducer,
  follows: followsReducer,
  listItemFollows: listItemFollowsReducer
});

export default entitiesReducer;
