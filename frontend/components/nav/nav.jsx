import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.logout()
      .then(() => { this.props.history.push('/') })
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
          {(this.props.currentUser !== undefined) ?
            <Link to='/items/'>candidpop</Link> :
            <Link to='/'>candidpop</Link>
          }
        </div>
        
        <div className='nav-right'>
          <ul>
            {(this.props.currentUser !== undefined) ?
              <Link to='/items/new' className='nav-button'>Add Item</Link> :
              <p height='0px'></p>
            }
            <Link to='/search'>
              <button className='nav-button'>Search</button>
            </Link>

            <Link to={`/${this.props.currentUser.id}`}>
              <button className='nav-button'>Profile</button>
            </Link>

            <button className='nav-button' onClick={this.handleSubmit}>Log Out</button>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;