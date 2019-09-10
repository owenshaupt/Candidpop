import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session.errors
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);