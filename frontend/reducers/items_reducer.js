import { RECEIVE_ITEMS, RECEIVE_ITEM, REMOVE_ITEM} from '../actions/item_actions';

const itemsReducer = (oldState = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ITEMS:
      return action.items;
    case RECEIVE_ITEM:
      return Object.assign({}, {[action.item.id]: action.item})
    case REMOVE_ITEM:
      let newState = Object.assign({}, oldState);
      delete newState[action.id];
      return newState;
    default:
      return oldState;
  }
};

export default itemsReducer;