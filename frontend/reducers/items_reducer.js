import {
  RECEIVE_ITEMS,
  RECEIVE_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEMS,
  RECEIVE_FILTERED_ITEMS
} from "../actions/item_actions";

const itemsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ITEMS:
      return action.items;
    case RECEIVE_ITEM:
      return Object.assign({}, { [action.item.id]: action.item });
    case RECEIVE_FILTERED_ITEMS:
      return action.items;
    case REMOVE_ITEM:
      let newState = Object.assign({}, oldState);
      delete newState[action.id];
      return newState;
    case CLEAR_ITEMS:
      return {};
    default:
      return oldState;
  }
};

export default itemsReducer;
