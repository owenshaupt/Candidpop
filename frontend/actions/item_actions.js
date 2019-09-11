import * as APIUtil from '../util/item_api_util';

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const RECEIVE_ITEM = 'RECEIVE_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

const recieveAllItems = items => ({
  type: RECEIVE_ITEMS,
  items
})

const recieveItem = item => ({
  type: RECEIVE_ITEM,
  item
})

const removeItem = () => ({
  type: REMOVE_ITEM
})

export const fetchItems = () => dispatch => {
  APIUtil.fetchItems()
    .then(items => dispatch(recieveAllItems(items)))
}

export const fetchItem = id => dispatch => {
  APIUtil.fetchItem(id)
    .then(item => dispatch(recieveItem(item)))
}

export const createItem = item => dispatch => {
  APIUtil.createItem(item)
    .then(item => dispatch(recieveItem(item)))
}

export const updateItem = item => dispatch => {
  APIUtil.updateItem(item)
    .then(item => dispatch(recieveItem(item)))
}

export const deleteItem = id => dispatch => {
  APIUtil.deleteItem(id)
    .then(() => dispatch(removeItem()))
}