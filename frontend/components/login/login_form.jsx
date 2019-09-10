import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      // email = "",
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
      .then(() => {this.props.history.push('/')})
  }

  handleGuest(e) {
    e.preventDefault();
    this.props.login(this.guest)
      .then(() => {this.props.history.push('/')})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>LOGIN TO CONTINUE</h2>
          <input
            type="text"
            value={this.state.username}
            placeholder='Username*'
            onChange={this.update('username')}
          />

          <input
            type="password"
            value={this.state.password}
            placeholder='Password*'
            onChange={this.update('password')}
          />

          <input type="submit" value='Login'/>
          <p>or</p>
        </form>

        <div>
          <Link to='/signup/'>Sign up</Link>
          <button onClick={this.handleGuest}>
            Sign in as guest
          </button>
        </div>
      </div>
    )
  }
}

export default LoginForm;