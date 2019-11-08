import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
    this.handleProfile = this.handleProfile.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout().then(() => {
      this.props.history.push("/");
    });
  }

  handleRedirect(e) {
    e.preventDefault();
    this.props.clearErrors();
    this.props.history.push("/login/");
  }

  handleProfile(e) {
    e.preventDefault();
    this.props
      .fetchUser(this.props.currentUser.id)
      .then(() => this.props.history.push(`/${this.props.currentUser.id}`));
  }

  render() {
    if (this.props.currentUser === undefined) {
      return (
        <div className='nav-bar'>
          <div className='nav-left'>
            <a href='/'>candidpop</a>
          </div>

          <div className='nav-right'>
            <button onClick={this.handleRedirect} className='nav-button'>
              Login
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className='nav-bar'>
        <div className='nav-left'>
          {this.props.currentUser !== undefined ? (
            <Link to='/items/'>candidpop</Link>
          ) : (
            <Link to='/'>candidpop</Link>
          )}
        </div>

        <div className='nav-right'>
          <ul>
            <div className="nav-right-child">
              {this.props.currentUser !== undefined ? (
                <Link to='/items/new' className='nav-button'>
                  Add Item
                </Link>
              ) : (
                <p height='0px'></p>
              )}
              <Link to='/items/search'>
                <button className='nav-button'>Search</button>
              </Link>
            </div>
            <div className="nav-right-child">
              <Link to='#'>
                <button className='nav-button' onClick={this.handleProfile}>
                  Profile
                </button>
              </Link>

              <button className='nav-button' onClick={this.handleSubmit}>
                Logout
              </button>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
