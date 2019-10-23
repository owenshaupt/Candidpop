import React from "react";
import { Link, withRouter } from "react-router-dom";

class FollowingListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItemFollow: null,
      listItemFollowed: null
    };

    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
  }

  componentDidMount() {
    const follow = {
      follower_id: this.props.currentUserId,
      followee_id: this.props.followedAccount.id
    };

    this.props.fetchListItemFollow(follow).then(() => {
      console.log("this.props.listItemFollow", this.props.listItemFollow);
      if (Object.keys(this.props.listItemFollow).length !== 0) {
        this.setState({ listItemFollow: this.props.listItemFollow });
        this.setState({ listItemFollowed: true });
      } else {
        this.setState({ listItemFollow: {} });
        this.setState({ listItemFollowed: false });
      }
    });
  }

  handleFollow() {
    const follow = {
      follower_id: this.props.currentUserId,
      followee_id: this.props.followedAccount.id
    };

    this.props
      .createFollow(follow)
      .then(() => {
        this.setState({ listItemFollowed: true });
      })
      .then(() => {
        this.props.fetchUser(this.props.match.params.userId);
      });
  }

  handleUnfollow() {
    const follow = {
      follower_id: this.props.currentUserId,
      followee_id: this.props.followedAccount.id
    };

    this.props
      .deleteFollow(follow)
      .then(() => {
        this.setState({ listItemFollowed: false });
      })
      .then(() => {
        this.props.fetchUser(this.props.match.params.userId);
      });
  }

  render() {
    if (this.state.listItemFollowed === null) return null;

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
          onClick={
            this.state.listItemFollowed === true
              ? this.handleUnfollow
              : this.state.listItemFollowed === false
              ? this.handleFollow
              : ""
          }
        >
          <span>
            {this.state.listItemFollowed === true
              ? "Unfollow"
              : this.state.listItemFollowed === false
                ? "Follow"
                : ""}
          </span>
        </button>
      </div>
    );
  }
}

export default withRouter(FollowingListItem);
