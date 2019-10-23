import React from "react";
import { withRouter } from "react-router-dom";
import FollowersListItem from "./followers_list_item";

class FollowersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('followers_list mounting')
  }

  componentDidUpdate() {
    console.log('followers_list updating')
  }

  render() {
    if (!this.props.followers) return null;

    const followers = this.props.followers.map(follower => {
      return (
        <div key={follower.id} >
          <FollowersListItem follower={follower} />
        </div>
      );
    });

    return <div className='user-items'>{followers}</div>;
  }
}

export default withRouter(FollowersList);
