import React from "react";
import ReactDOM from "react-dom";
// import * as APIUtil from './util/session_api_util';
import { login } from './actions/session_actions'
import configureStore from "./store/store";
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');

  window.login = login;
  // window.logout = APIUtil.logout;
  // window.signup = APIUtil.signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store} />, root)
})