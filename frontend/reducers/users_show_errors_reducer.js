import { RECEIVE_USER_ERRORS } from "../actions/user_actions";

let _nullState = {
  errors: []
};

export const usersShowErrorsReducer = (state = _nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return Object.assign({}, state, { errors: action.errors });
    default:
      return state;
  }
};