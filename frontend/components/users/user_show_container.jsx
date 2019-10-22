import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUser } from '../../actions/user_actions'
import { closeModal, openModal } from '../../actions/modal';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.userShow,
  errors: state.errors.user.errors,
  modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  closeModal: () => dispatch(closeModal()),
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);