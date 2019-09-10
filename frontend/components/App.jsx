import React from "react";
import NavContainer from './nav/nav_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './login_form_container';

const App = () => (
  <div>
    <header>
      <h1>Candidpop React Yas</h1>
      <NavContainer />
    </header>

    <Route exact path="/login/" component={ LoginFormContainer }/>
  </div>
);

export default App;