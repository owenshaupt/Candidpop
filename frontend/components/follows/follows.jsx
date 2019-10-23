import React from "react";
import { withRouter } from "react-router-dom";
import FollowersList from "./followers_list";
import FollowingList from "./following_list";

class Follows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followed: null
    };

    this.toggleTab = this.toggleTab.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
  }

  componentDidMount() {
    this.setState({ followed: this.props.followed });

    const selectedTab = document.getElementById(this.props.start);
    selectedTab.classList.add("selected-tab");

    if (this.props.start === "followers") {
      const hr = document.getElementById("hr");
      hr.classList.add("tab-highlight-left");
      this.setState({ hr: "followers" });
    } else {
      hr.classList.add("tab-highlight-right");
      this.setState({ hr: "following" });
    }
  }

  componentDidUpdate() {
    if (this.state.followed !== this.props.followed) {
      this.setState({ followed: this.props.followed });
    }
  }

  handleFollow() {
    console.log("hit handle follow");
  }

  toggleTab(tab) {
    const currentTab = document.querySelector(".selected-tab");
    const hr = document.getElementById("hr");
    let newTab;

    if (currentTab.getAttribute(".class") !== tab) {
      currentTab.classList.remove("selected-tab");
      newTab = document.getElementById(tab);
      newTab.classList.add("selected-tab");
    }

    if (newTab.classList.contains("followers")) {
      hr.classList.remove("tab-highlight-right");
      hr.classList.add("tab-highlight-left");
      this.setState({ hr: "followers" });
    } else {
      hr.classList.remove("tab-highlight-left");
      hr.classList.add("tab-highlight-right");
      this.setState({ hr: "following" });
    }
  }

  render() {
    return (
      <div className='follows-div'>
        <aside className='follows-ui'>
          <div>
            <div className='modal-header'>
              <button
                className='header-close-button'
                onClick={this.props.closeModal}
              >
                <img
                  height='15px'
                  width='15px'
                  src={window.closeFollowModal}
                  alt=''
                />
              </button>
              <div>
                <p className='header-username'>@{this.props.user.username}</p>
              </div>
            </div>
            <div className='tabs-container'>
              <button
                id='followers'
                className='modal-tab followers'
                onClick={() => this.toggleTab("followers")}
              >
                Followers
              </button>
              <button
                id='following'
                className='modal-tab following'
                onClick={() => this.toggleTab("following")}
              >
                Following
              </button>
              <hr id='hr' />
            </div>
            <div className='tab-panel'>
              <div className='current-panel'>
                {this.state.hr === "followers" ? (
                  <FollowersList
                    user={this.props.user}
                    followed={this.state.followed}
                    followers={this.props.user.followers}
                    fetchUser={this.props.fetchUser}
                    fetchFollow={this.props.fetchFollow}
                    createFollow={this.props.createFollow}
                    deleteFollow={this.props.deleteFollow}
                    fetchListItemFollow={this.props.fetchListItemFollow}
                    listItemFollow={this.props.listItemFollow}
                    currentUserId={this.props.currentUser.id}
                  />
                ) : (
                  <FollowingList
                    user={this.props.user}
                    followed={this.state.followed}
                    following={this.props.user.following}
                    fetchUser={this.props.fetchUser}
                    fetchFollow={this.props.fetchFollow}
                    createFollow={this.props.createFollow}
                    deleteFollow={this.props.deleteFollow}
                    fetchListItemFollow={this.props.fetchListItemFollow}
                    listItemFollow={this.props.listItemFollow}
                    currentUserId={this.props.currentUser.id}
                  />
                )}
              </div>
            </div>
          </div>
        </aside>
      </div>
    );
  }
}

export default withRouter(Follows);
