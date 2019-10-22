import { connect } from 'react-redux';
import Follows from './follows';
import { openModal, closeModal } from '../../actions/modal';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.userShow,
  errors: state.errors.user.errors,
  start: ownProps.start
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Follows);