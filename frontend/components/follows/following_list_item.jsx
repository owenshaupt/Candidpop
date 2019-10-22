import React from "react";
import { Link, withRouter } from "react-router-dom";

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
          <Link to={`/${this.props.followedAccount.id}`}>
            <img
              className='profile-photo'
              src={
                this.props.followedAccount.profile_pic ||
                window.emptyUserProfilePicURL
              }
              alt=''
            />
          </Link>
        </div>
        <div className='user-name-handle'>
          <Link className='user-name' to={`/${this.props.followedAccount.id}`}>
            {this.props.followedAccount.first_name}{" "}
            {this.props.followedAccount.last_name}
          </Link>
          <p className='user-handle'>@{this.props.followedAccount.username}</p>
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
