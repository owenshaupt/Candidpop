import React from "react";
import { withRouter } from "react-router-dom";

class Follows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.toggleTab = this.toggleTab.bind(this);
  }

  componentDidMount() {
    // console.log(this.props.start)
    const selectedTab = document.getElementById(this.props.start);
    selectedTab.classList.add("selected-tab");
  }

  toggleTab(tab) {
    const currentTab = document.querySelector('.selected-tab');
    if (currentTab.getAttribute('.class') !== tab) {
      currentTab.classList.remove("selected-tab");
      const newTab = document.getElementById(tab);
      newTab.classList.add("selected-tab");
    }
  }

  render() {
    // const highScores = this.props.players.data.slice(0, 10);

    // const highScoreList = highScores.map((player, i) => (
    //   <HighScoreListItem key={i} username={player.username} coins={player.coins} />
    // ));

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
                className='modal-tab'
                onClick={() => this.toggleTab('followers')}
              >
                Followers
              </button>
              <button
                id='following'
                className='modal-tab'
                onClick={() => this.toggleTab('following')}
              >
                Following
              </button>
              <hr className='tab-highlight' />
            </div>
            <div>
              <h4>user1</h4>
              <h4>user2</h4>
              <h4>user3</h4>
              <h4>user4</h4>
            </div>
          </div>
        </aside>
      </div>
    );
  }
}

export default withRouter(Follows);
