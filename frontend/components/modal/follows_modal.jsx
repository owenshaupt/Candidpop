import React from "react";
import { openModal, closeModal } from "../../actions/modal";
import { clearFollowErrors } from "../../actions/follow_actions";
import { connect } from "react-redux";
import FollowsContainer from "../follows/follows_container";

class FollowsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followed: null
    };
  }

  componentDidMount() {
    this.setState({ followed: this.props.followed });
  }

  componentDidUpdate() {
    if (this.state.followed !== this.props.followed) {
      this.setState({ followed: this.props.followed });
    }
  }

  render() {
    if (!this.props.modal) {
      return null;
    }

    let component;
    switch (this.props.modal) {
      case "followers":
        component = (
          <FollowsContainer followed={this.props.followed} start='followers' />
        );
        break;
      case "following":
        component = (
          <FollowsContainer followed={this.props.followed} start='following' />
        );
        break;
      default:
        return null;
    }

    return (
      <div
        className='modal-background'
        id='modal-background'
        onClick={() => {
          this.props.clearFollowErrors();
          this.props.closeModal();
        }}
      >
        <div className='modal-child' onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    modal: state.ui.modal,
    followed: ownProps.followed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    openModal: (modal, followed) => dispatch(openModal(modal, followed)),
    clearFollowErrors: () => dispatch(clearFollowErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowsModal);
