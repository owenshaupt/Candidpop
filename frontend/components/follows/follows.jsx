import React from "react";
import { withRouter } from "react-router-dom";
import FollowersList from "./followers_list";
import FollowingList from "./following_list";

class Follows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hr: null
    };

    this.toggleTab = this.toggleTab.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
  }

  componentDidMount() {
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

  handleFollow() {
    console.log("hit handle follow");
  }

  toggleTab(tab) {
    const currentTab = document.querySelector(".selected-tab");
    const currentTabText = currentTab.innerHTML; // 'followers' or 'following'
    const hr = document.getElementById("hr"); // 'followers' = left
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
    console.log("followers", this.props.user.followers);
    console.log("following", this.props.user.following);

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
                  <FollowersList followers={this.props.user.followers} />
                ) : (
                  <FollowingList following={this.props.user.following} />
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
