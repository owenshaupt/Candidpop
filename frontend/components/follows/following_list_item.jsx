import React from "react";
import { withRouter } from "react-router-dom";

class FollowingListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleFollow = this.handleFollow.bind(this);
  }

  handleFollow() {
    console.log("hit handle follow");
  }

  render() {
    if (!this.props.followedAccount) return null;

    return (
      <div className='user-item'>
        <div className='user-photo'>
          <a href=''>
            <img
              className='profile-photo'
              src={
                this.props.followedAccount.profile_pic ||
                window.emptyUserProfilePicURL
              }
              alt=''
            />
          </a>
        </div>
        <div className='user-name-handle'>
          <a className='user-name' href=''>
            {this.props.followedAccount.first_name}{" "}
            {this.props.followedAccount.last_name}
          </a>
          <p className='user-handle'>{this.props.followedAccount.username}</p>
        </div>
        <button
          className='follow-button user-follow-button'
          onClick={this.handleFollow}
        >
          Follow
        </button>
      </div>
    );
  }
}

export default withRouter(FollowingListItem);
