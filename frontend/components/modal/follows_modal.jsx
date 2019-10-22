import React from "react";
import { openModal, closeModal } from "../../actions/modal";
import { connect } from "react-redux";
import FollowsContainer from "../follows/follows_container";

const FollowsModal = ({ modal, closeModal }) => {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case "followers":
      component = <FollowsContainer start='followers' />;
      break;
    case "following":
      component = <FollowsContainer start='following' />;
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

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowsModal);
