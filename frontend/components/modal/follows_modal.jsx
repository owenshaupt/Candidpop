import React from "react";
import { openModal, closeModal } from "../../actions/modal";
import { connect } from "react-redux";
import FollowsContainer from "../follows/follows_container";

const FollowsModal = ({ modal, followed, closeModal }) => {
  if (!modal) {
    return null;
  }

  console.log('in FollowsModal followed:', followed)

  let component;
  switch (modal) {
    case "followers":
      component = <FollowsContainer followed={followed} start='followers' />;
      break;
    case "following":
      component = <FollowsContainer followed={followed} start='following' />;
      break;
    default:
      return null;
  }

  return (
    <div className='modal-background' id='modal-background' onClick={closeModal}>
      <div className='modal-child' onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    modal: state.ui.modal,
    followed: ownProps.followed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    openModal: (modal, followed) => dispatch(openModal(modal, followed))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowsModal);
