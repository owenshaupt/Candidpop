import {
  RECEIVE_FOLLOW,
  REMOVE_FOLLOW
} from "../actions/follow_actions";

const followsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_FOLLOW:
      return action.follow || null;
    case REMOVE_FOLLOW:
      let newState = Object.assign({}, oldState);
      delete newState[action.follow];
      return newState;
    default:
      return oldState;
  }
};

export default followsReducer;
