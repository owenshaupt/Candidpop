import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser === undefined) {
      return (
        <div className='nav-bar'>
          <div className='nav-left'>
            <a href="/">candidpop</a>
          </div>
        
          <div className='nav-right'>
            <Link to="/login">Login</Link>
          </div>
        </div>
      );
    }

    return (
      <div className='nav-bar'>
        <div className='nav-left'>
          <Link to='/'>candidpop</Link>
        </div>
        
        <div className='nav-right'>
          <button>Search</button>
          <button>Profile</button>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      </div>
    );
  }
}

export default Nav;