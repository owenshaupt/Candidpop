import React from "react";
import NavContainer from './nav/nav_container';
import Footer from './footer/footer';
import { Route, Switch, Link } from 'react-router-dom';
import LoginFormContainer from './login/login_form_container';
import SignupFormContainer from './signup/signup_form_container';
import ItemIndexContainer from './items/item_index_container';
import ItemShowContainer from './items/item_show_container';
import NewItemFormContainer from './items/new_item_form_container';
import EditItemFormContainer from './items/edit_item_form_container';
import UserShowContainer from './users/user_show_container';
import SearchContainer from './search/search_container';
import Splash from './splash/splash';
import { AuthRoute } from '../util/route_util';


const App = () => (
  <div>
    <header>
      <NavContainer />
    </header>

    <Switch>
      <AuthRoute exact path="/login/" component={ LoginFormContainer }/>
      <AuthRoute exact path="/signup/" component={ SignupFormContainer }/>
      <Route exact path="/items/new/" component={ NewItemFormContainer }/>
      <Route exact path="/items/search" component={ SearchContainer }/>
      <Route exact path="/items/:itemId/edit" component={ EditItemFormContainer }/>
      <Route exact path="/items/:itemId/" component={ ItemShowContainer }/>
      <Route exact path="/items/" component={ ItemIndexContainer }/>
      <Route exact path="/:userId/" component={ UserShowContainer }/>
      <Route exact path="/" component={ Splash }/>
    </Switch>

    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;