import { RECEIVE_USER, CLEAR_USER } from "../actions/user_actions";

export const usersShowReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, action.user);
    case CLEAR_USER:
      return {};
    default:
      return state;
  }
};
