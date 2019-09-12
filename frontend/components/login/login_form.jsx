import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }

    this.guest = {
      username: 'guest',
      password: 'password',
      first_name: 'guest_info',
      last_name: 'guest_info',
      email: 'guest_info',
      location: 'guest_info',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleGuest = this.handleGuest.bind(this)
  }

  update(field) {
    return (e) => (
      this.setState({[field]: e.target.value})
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => {this.props.history.push('/feed/')})
  }

  handleGuest(e) {
    e.preventDefault();
    this.props.login(this.guest)
      .then(() => {this.props.history.push('/feed/')})
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className='login-holder'>
        <h1>LOGIN TO CONTINUE</h1>
        <form className='login-form' onSubmit={this.handleSubmit}>
          <div className='login-display-block'>
            <div className='login-form-data'>
              <input
                type="text"
                value={this.state.username}
                placeholder='Username*'
                onChange={this.update('username')}
              />
            </div>
          </div>
          <div className='login-display-block'>
            <div className='login-form-data'>
              <input
                type="password"
                value={this.state.password}
                placeholder='Password*'
                onChange={this.update('password')}
              />
            </div>
          </div>
          <div className='errors-div'>
            {this.renderErrors()}
          </div>
          <input className='button login-button' type="submit" value='Login'/>
        </form>

        <div className='or-box'>
          <p className='or'>or</p>
        </div>

        <div className="signup-and-guest-section">
          
          <Link className='button signup-button' to='/signup/'>Sign up</Link>

          <button className='button login-button signin-guest-button' onClick={this.handleGuest}>
            Sign in as guest
          </button>
        </div>
      </div>
    )
  }
}

export default LoginForm;