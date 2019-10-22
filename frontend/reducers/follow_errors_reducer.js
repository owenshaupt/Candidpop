import { RECEIVE_FOLLOW, RECEIVE_FOLLOW_ERRORS } from "../actions/follow_actions";

let _nullState = {
  errors: []
};

export const followErrorsReducer = (state = _nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FOLLOW:
      return _nullState;
    case RECEIVE_FOLLOW_ERRORS:
      return Object.assign({}, state, { errors: action.errors });
    default:
      return state;
  }
};