import React from "react";
import { openModal, closeModal } from "../../actions/modal";
import { connect } from "react-redux";
import FollowsContainer from "../follows/follows_container";

class FollowsModal extends React.Component {
  constructor(props) {
    // modal, followed, closeModal in this.props
    super(props);
    this.state = {
      followed: null
    };
  }

  componentDidMount() {
    this.setState({ followed: this.props.followed });
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("follows modal updating");
    if (this.state.followed !== this.props.followed) {
      this.setState({ followed: this.props.followed });
    }
  }

  render() {
    if (!this.props.modal) {
      return null;
    }

    // console.log("in FollowsModal this.props.followed:", this.props.followed);
    // console.log("in FollowsModal this.state:", this.state);

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
        onClick={this.props.closeModal}
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
    openModal: (modal, followed) => dispatch(openModal(modal, followed))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowsModal);
