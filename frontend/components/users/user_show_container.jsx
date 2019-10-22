import { connect } from "react-redux";
import UserShow from "./user_show";
import { fetchUser } from "../../actions/user_actions";
import { closeModal, openModal } from "../../actions/modal";
import {} from "../../actions/follow_actions";

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
  openModal: modal => dispatch(openModal(modal)),
  createFollow: follow => dispatch(createFollow(follow)),
  deleteFollow: id => dispatch(deleteFollow(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
