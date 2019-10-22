import React from "react";
import { Link, withRouter } from "react-router-dom";

class FollowersListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleFollow = this.handleFollow.bind(this);
  }

  handleFollow() {
    console.log("hit handle follow");
  }

  render() {
    if (!this.props.follower) return null;

    return (
      <div className='user-item'>
        <div className='user-photo'>
          <Link to={`/${this.props.follower.id}`}>
            <img
              className='profile-photo'
              src={
                this.props.follower.profile_pic || window.emptyUserProfilePicURL
              }
              alt=''
            />
          </Link>
        </div>
        <div className='user-name-handle'>
          <Link className='user-name' to={`/${this.props.follower.id}`}>
            {this.props.follower.first_name} {this.props.follower.last_name}
          </Link>
          <p className='user-handle'>{this.props.follower.username}</p>
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

export default withRouter(FollowersListItem);
