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
            <Link to="/login" className='nav-button'>Login</Link>
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
          <ul>
            {(this.props.currentUser !== undefined) ?
              <Link to='/items/new' className='nav-button'>Add Item</Link> :
              <p height='0px'></p>
            }
            <button className='nav-button'>Search</button>
            <button className='nav-button'>Profile</button>
            <button className='nav-button' onClick={this.props.logout}>Log Out</button>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;