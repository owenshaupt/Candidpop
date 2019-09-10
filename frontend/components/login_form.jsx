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
    this.handleSubmit = this.handleSubmit.bind(this)
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

  render() {
    return (
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
        {/* <Link to=''>Sign up</Link> */}
        <button>Sign up</button>
      </form>

    )
  }
}

export default LoginForm;