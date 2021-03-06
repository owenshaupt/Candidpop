import { connect } from "react-redux";
import UserShow from "./user_show";
import { fetchUser, clearUser } from "../../actions/user_actions";
import { closeModal, openModal } from "../../actions/modal";
import {
  createFollow,
  deleteFollow,
  fetchFollow,
  fetchListItemFollow,
  clearFollowErrors
} from "../../actions/follow_actions";
import { clearErrors } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.userShow,
  currentUser: state.session,
  errors: state.errors.user.errors,
  followErrors: state.errors.follow.errors,
  modal: state.ui.modal,
  follow: state.entities.follows
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors()),
  fetchUser: id => dispatch(fetchUser(id)),
  closeModal: () => dispatch(closeModal()),
  openModal: (modal, followed) => dispatch(openModal(modal, followed)),
  fetchFollow: follow => dispatch(fetchFollow(follow)),
  fetchListItemFollow: follow => dispatch(fetchListItemFollow(follow)),
  createFollow: follow => dispatch(createFollow(follow)),
  deleteFollow: follow => dispatch(deleteFollow(follow)),
  clearUser: () => dispatch(clearUser()),
  clearFollowErrors: () => dispatch(clearFollowErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
