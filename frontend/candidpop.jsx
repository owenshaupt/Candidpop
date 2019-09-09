import React from "react";
import ReactDOM from "react-dom";
import * as APIUtil from './util/session_api_util';

// import configureStore from "./store/store";
// import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  // const store = configureStore();
  const root = document.getElementById('root');

  window.login = APIUtil.login;
  window.logout = APIUtil.logout;
  window.signup = APIUtil.signup;

  ReactDOM.render(<h2>Welcome to Candidpop</h2>, root)
})