import { combineReducers } from "redux";

import { sessionErrorsReducer } from "./session_errors_reducer";
import { itemErrorsReducer } from "./item_errors_reducer";
import { usersShowErrorsReducer } from "./users_show_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  item: itemErrorsReducer,
  user: usersShowErrorsReducer
});

export default errorsReducer;