import { connect } from 'react-redux';
import Nav from './nav';
import { logout, clearErrors } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions'
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  login: () => dispatch(login()),
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));