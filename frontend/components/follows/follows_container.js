import { connect } from 'react-redux';
import Follows from './follows';
import { openModal, closeModal } from '../../actions/modal';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.userShow,
  errors: state.errors.user.errors,
  follow: state.entities.follows,
  start: ownProps.start,
  followed: ownProps.followed
});

const mapDispatchToProps = dispatch => ({
  openModal: (modal, followed) => dispatch(openModal(modal, followed)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Follows);