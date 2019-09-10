import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser === undefined) {
      return (
        <div>
          <Link to="/login">Log In</Link>
        </div>
      );
    }

    return (
      <div className='nav-right'>
        <button>Search</button>
        <button>Profile</button>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    );
  }
}

export default Nav;