import { connect } from "react-redux";
import Follows from "./follows";
import { openModal, closeModal } from "../../actions/modal";
import { fetchUser } from "../../actions/user_actions";
import { fetchFollow, fetchListItemFollow } from "../../actions/follow_actions";

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.userShow,
  errors: state.errors.user.errors,
  follow: state.entities.follows,
  listItemFollow: state.entities.listItemFollows,
  start: ownProps.start,
  followed: ownProps.followed,
  currentUser: state.session
});

const mapDispatchToProps = dispatch => ({
  openModal: (modal, followed) => dispatch(openModal(modal, followed)),
  closeModal: () => dispatch(closeModal()),
  fetchUser: id => dispatch(fetchUser(id)),
  fetchFollow: follow => dispatch(fetchFollow(follow)),
  fetchListItemFollow: follow => dispatch(fetchListItemFollow(follow))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Follows);
