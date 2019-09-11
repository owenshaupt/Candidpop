import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root';
import * as APIUtil from './util/item_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  window.fetchItems = APIUtil.fetchItems;
  window.fetchItem = APIUtil.fetchItem;
  window.createItem = APIUtil.createItem;
  window.updateItem = APIUtil.updateItem;
  window.deleteItem = APIUtil.deleteItem;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root)
})