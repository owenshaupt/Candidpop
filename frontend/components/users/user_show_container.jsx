import { connect } from "react-redux";
import UserShow from "./user_show";
import { fetchUser } from "../../actions/user_actions";
import { closeModal, openModal } from "../../actions/modal";
import { createFollow, deleteFollow, fetchFollow } from "../../actions/follow_actions";

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.userShow,
  currentUser: state.session,
  errors: state.errors.user.errors,
  modal: state.ui.modal,
  follow: state.entities.follows
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  closeModal: () => dispatch(closeModal()),
  openModal: (modal, followed) => dispatch(openModal(modal, followed)),
  fetchFollow: follow => dispatch(fetchFollow(follow)),
  createFollow: follow => dispatch(createFollow(follow)),
  deleteFollow: follow => dispatch(deleteFollow(follow))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
