import React from "react";
import NavContainer from './nav/nav_container';
import { Route, Switch, Link } from 'react-router-dom';
import LoginFormContainer from './login/login_form_container';
import SignupFormContainer from './signup/signup_form_container';

const App = () => (
  <div>
    <header>
      <h1>Candidpop</h1>
      <NavContainer />
    </header>

    <Switch>
      <Route exact path="/login/" component={ LoginFormContainer }/>
      <Route exact path="/signup/" component={ SignupFormContainer }/>
    </Switch>
  </div>
);

export default App;