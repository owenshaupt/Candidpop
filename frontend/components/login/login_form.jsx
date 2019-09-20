import React from 'react';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/core';

const override = css`
    display: block;
    margin: 0 auto;
`;

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loading: false,
      guestLoading: false
    }

    this.guest = {
      username: 'guest',
      password: 'password',
      first_name: 'guest_info',
      last_name: 'guest_info',
      email: 'guest_info',
      location: 'guest_info',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  update(field) {
    return (e) => (
      this.setState({[field]: e.target.value})
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });
    this.props.login(this.state)
      .then(() => {this.props.history.push('/items/')})
      .fail(() => this.setState({ loading: false }))
  }

  handleGuest(e) {
    e.preventDefault();
    this.setState({ guestLoading: true });
    this.props.login(this.guest)
      .then(() => {this.props.history.push('/items/')})
      .fail(() => this.setState({ guestLoading: false }))

  }

  handleRedirect(e) {
    e.preventDefault();
    this.props.clearErrors();
    this.props.history.push('/signup/');
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
          <div className='login-button-container'>
            <input
              className='button login-button'
              type="submit"
              value={(this.state.loading) ?
                ("") :
                ('Login')}/>
            <div className='login-loading'>
              <ClipLoader
                css={override}
                sizeUnit={"px"}
                size={16}
                color={'white'}
                loading={this.state.loading}
              />
            </div>
          </div>
        </form>

        <div className='or-box'>
          <p className='or'>or</p>
        </div>

        <div className="signup-and-guest-section">
          <div className='signup-button-container'>
            <button
              className='button signup-button'
              onClick={this.handleRedirect}>
              Sign up
            </button>
          </div>

          <div className='guest-button-container'>
            <button
              className='button login-button signin-guest-button'
              onClick={this.handleGuest}>
              {(this.state.guestLoading) ?
                ("") :
                ('Sign in as guest')}
            </button>
            <div className='guest-loading'>
              <ClipLoader
                css={override}
                sizeUnit={"px"}
                size={16}
                color={'white'}
                loading={this.state.guestLoading}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm;