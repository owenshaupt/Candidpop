import { RECEIVE_ITEM, RECEIVE_ITEM_ERRORS } from "../actions/item_actions";

let _nullState = {
  errors: []
};

export const itemErrorsReducer = (state = _nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ITEM:
      return _nullState;
    case RECEIVE_ITEM_ERRORS:
      return Object.assign({}, state, { errors: action.errors });
    default:
      return state;
  }
};