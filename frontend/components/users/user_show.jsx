import React from "react";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/core";
import FollowsModal from "../modal/follows_modal";
import SharableItemIndex from "../items/sharable_item_index";

const override = css`
  display: block;
  margin: 0 auto;
`;

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followed: null
    };

    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
  }

  componentDidMount() {
    const follow = {
      follower_id: this.props.currentUser.id,
      followee_id: this.props.match.params.userId
    };

    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchFollow(follow).then(() => {
      Object.keys(this.props.follow).length
        ? this.setState({ followed: true })
        : this.setState({ followed: false });
    });
  }

  componentDidUpdate(prevProps) {
    const follow = {
      follower_id: this.props.currentUser.id,
      followee_id: this.props.match.params.userId
    };

    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.props.closeModal();
      this.props.clearErrors();
      this.props.fetchUser(this.props.match.params.userId);
      this.props.fetchFollow(follow).then(() => {
        Object.keys(this.props.follow).length
          ? this.setState({ followed: true })
          : this.setState({ followed: false });
      });
    }
  }

  componentWillUnmount() {
    this.props.clearUser();
  }

  handleFollow() {
    const follow = {
      follower_id: this.props.currentUser.id,
      followee_id: this.props.user.id
    };

    this.props
      .createFollow(follow)
      .then(() => {
        this.setState({ followed: true });
      })
      .then(() => {
        this.props.fetchUser(this.props.match.params.userId);
      });
  }

  handleUnfollow() {
    const follow = {
      follower_id: this.props.currentUser.id,
      followee_id: this.props.user.id
    };

    this.props
      .deleteFollow(follow)
      .then(() => {
        this.setState({ followed: false });
      })
      .then(() => {
        this.props.fetchUser(this.props.match.params.userId);
      });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.followErrors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    if (!this.props.user || !this.props.user.items) {
      return (
        <div className='page-loading'>
          <ClipLoader
            css={override}
            sizeUnit={"px"}
            size={42}
            color={"#282828"}
            loading={true}
          />
        </div>
      );
    }

    const following = this.state.followed;

    return (
      <div className='user-show-page-container'>
        <FollowsModal followed={this.state.followed} />
        <div className='user-show-page'>
          <div className='user-show-info'>
            <div className='user-show-top'>
              <div className='user-show-profile-pic'>
                <img
                  className='profile-photo'
                  src={
                    this.props.user.profile_pic || window.emptyUserProfilePicURL
                  }
                  alt=''
                />
              </div>
              <div className='user-names'>
                <div className='user-first-last'>
                  <h1 className='user-first'>{this.props.user.first_name}</h1>
                  <h1 className='user-last'>{this.props.user.last_name}</h1>
                </div>
                <>
                  <h5 className='user-username'>@{this.props.user.username}</h5>
                </>
              </div>
            </div>
            <div className='follow-info'>
              <div className='follow-links'>
                <div className='follow-link followers-link'>
                  <button
                    className='follow-link-button'
                    onClick={() => {
                      this.props.openModal("followers", this.state.followed);
                      this.props.clearFollowErrors();
                    }}
                  >
                    <span className='follower-count follow-count'>
                      {this.props.user.followers.length}
                    </span>
                    <span>Followers</span>
                  </button>
                </div>
                <div className='follow-link following-link'>
                  <button
                    className='follow-link-button'
                    onClick={() => {
                      this.props.openModal("following", this.state.followed);
                      this.props.clearFollowErrors();
                    }}
                  >
                    <span className='following-count follow-count'>
                      {this.props.user.following.length}
                    </span>
                    <span>Following</span>
                  </button>
                </div>
              </div>
              <div className='follow-button-div'>
                <button
                  className='follow-button'
                  onClick={following ? this.handleUnfollow : this.handleFollow}
                >
                  <span>{following ? "Unfollow" : "Follow"}</span>
                </button>
              </div>
              <div className='errors-div'>{this.renderErrors()}</div>
            </div>
          </div>

          <div className='user-items-for-sale'>
            <div className='items-list-container user-items-index-container'>
              <div className='selling-header'>
                <h3>Selling</h3>
              </div>
              {this.props.user.items.length !== 0 ? (
                <SharableItemIndex
                  items={this.props.user.items}
                  userShow={true}
                />
              ) : (
                <h4 className='empty-store-note'>Nothing for sale!</h4>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserShow;
