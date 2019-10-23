import * as APIUtil from "../util/item_api_util";
import * as APIUtilSearch from "../util/search_api_util";

export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const RECEIVE_ITEM = "RECEIVE_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CLEAR_ITEMS = "CLEAR_ITEMS";
export const RECEIVE_ITEM_ERRORS = "RECEIVE_ITEM_ERRORS";
export const RECEIVE_FILTERED_ITEMS = "RECEIVE_FILTERED_ITEMS";

const recieveAllItems = items => ({
  type: RECEIVE_ITEMS,
  items
});

const recieveItem = item => ({
  type: RECEIVE_ITEM,
  item
});

const removeItem = id => ({
  type: REMOVE_ITEM,
  id
});

const receiveFilteredItems = items => ({
  type: RECEIVE_FILTERED_ITEMS,
  items
});

export const receiveErrors = errors => ({
  type: RECEIVE_ITEM_ERRORS,
  errors
});

export const fetchItems = () => dispatch => {
  APIUtil.fetchItems()
    .then(items => dispatch(recieveAllItems(items)))
    .fail(error => dispatch(receiveErrors(error.responseJSON)));
};

export const fetchItem = id => dispatch =>
  APIUtil.fetchItem(id)
    .then(item => dispatch(recieveItem(item)))
    .fail(error => dispatch(receiveErrors(error.responseJSON)));

export const createItem = item => dispatch =>
  APIUtil.createItem(item)
    .then(item => dispatch(recieveItem(item)))
    .fail(error => dispatch(receiveErrors(error.responseJSON)));

export const updateItem = item => dispatch =>
  APIUtil.updateItem(item)
    .then(item => dispatch(recieveItem(item)))
    .fail(error => dispatch(receiveErrors(error.responseJSON)));

export const deleteItem = id => dispatch =>
  APIUtil.deleteItem(id)
    .then(() => dispatch(removeItem()))
    .fail(error => dispatch(receiveErrors(error.responseJSON)));

export const searchItems = search_id => dispatch =>
  APIUtilSearch.searchItems(search_id)
    .then(items => dispatch(receiveFilteredItems(items)))
    .fail(error => dispatch(receiveErrors(error.responseJSON)));

export const clearItems = () => {
  return {
    type: CLEAR_ITEMS
  };
};
