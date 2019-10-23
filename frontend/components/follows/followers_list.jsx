import React from "react";
import { withRouter } from "react-router-dom";
import FollowersListItem from "./followers_list_item";

class FollowersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: []
    };
  }

  componentDidMount() {
    this.props.fetchUser(this.props.user.id).then(() => {
      this.setState({ followers: this.props.followers });
    });
  }

  componentDidUpdate() {}

  render() {
    if (!this.props.followers) return null;

    const followers = this.props.followers.map(follower => {
      return (
        <div key={follower.id}>
          <FollowersListItem
            follower={follower}
            fetchUser={this.props.fetchUser}
            fetchFollow={this.props.fetchFollow}
            createFollow={this.props.createFollow}
            deleteFollow={this.props.deleteFollow}
            fetchListItemFollow={this.props.fetchListItemFollow}
            listItemFollow={this.props.listItemFollow}
            currentUserId={this.props.currentUserId}
          />
        </div>
      );
    });

    return <div className='user-items'>{followers}</div>;
  }
}

export default withRouter(FollowersList);
