import React from "react";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/core";
import FollowsModal from "../modal/follows_modal";

const override = css`
  display: block;
  margin: 0 auto;
`;

class UserShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleFollow = this.handleFollow.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  handleFollow() {
    console.log("hit handle follow");
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

    const items = this.props.user.items.map(item => {
      return (
        <div key={item.id} className='user-show-index-item-padding'>
          <li key={item.id} className='items-index-li user-show-index-item'>
            <div className='items-index-item'>
              <Link className='item-card-link' to={`/items/${item.id}`}>
                <div className='image-grey-out'>
                  <div className='index-item-photo'>
                    <img
                      width='100%'
                      height='100%'
                      className='photo'
                      src={item.photos[0].photoUrl}
                      alt=''
                    />
                  </div>
                </div>
                <p className='index-item-price'>${item.price}</p>
              </Link>
            </div>
          </li>
        </div>
      );
    });

    console.log(this.props);

    return (
      <div className='user-show-page-container'>
        <FollowsModal />
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
                <div>
                  <h5 className='user-username'>@{this.props.user.username}</h5>
                </div>
              </div>
            </div>
            <div className='follow-info'>
              <div className='follow-links'>
                <div className='follow-link followers-link'>
                  <button
                    className='follow-link-button'
                    onClick={() => this.props.openModal('followers')}
                  >
                    <span className='follower-count follow-count'>100</span>
                    <span>Followers</span>
                  </button>
                </div>
                <div className='follow-link following-link'>
                  <button
                    className='follow-link-button'
                    onClick={() => this.props.openModal('following')}
                  >
                    <span className='following-count follow-count'>100</span>
                    <span>Following</span>
                  </button>
                </div>
              </div>
              <div className='follow-button-div'>
                <button className='follow-button' onClick={this.handleFollow}>
                  {/* ternary to decide if follow or unfollow */}
                  Follow
                </button>
              </div>
            </div>
            {/* <div className='user-show-bottom'>
              <div></div> !!for bio if implemented
            </div> */}
          </div>

          <div className='user-items-for-sale'>
            <div className='items-list-container user-items-index-container'>
              <div className='selling-header'>
                <h3>Selling</h3>
              </div>
              {items.length !== 0 ? (
                <ul className='items-list user-show-items-list'>
                  {items}
                  <i className='filler-items' aria-hidden='true'></i>
                  <i className='filler-items' aria-hidden='true'></i>
                  <i className='filler-items' aria-hidden='true'></i>
                  <i className='filler-items' aria-hidden='true'></i>
                  <i className='filler-items' aria-hidden='true'></i>
                </ul>
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
