import { connect } from 'react-redux';
import Nav from './nav';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];

  return { currentUser };
};

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login()),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);