import React from "react";
import { withRouter } from "react-router-dom";
import FollowingListItem from "./following_list_item";

class FollowingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      following: []
    };
  }

  componentDidMount() {
    this._isMounted = true;

    this.props.fetchUser(this.props.user.id).then(() => {
      if (this._isMounted) this.setState({ following: this.props.following });
    });
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    if (!this.props.following) return null;

    const following = this.props.following.map(followedAccount => {
      return (
        <div key={followedAccount.id}>
          <FollowingListItem
            followedAccount={followedAccount}
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

    return <div className='user-items'>{following}</div>;
  }
}

export default withRouter(FollowingList);
