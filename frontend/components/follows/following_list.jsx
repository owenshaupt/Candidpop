import React from "react";
import { withRouter } from "react-router-dom";
import FollowingListItem from "./following_list_item";

class FollowingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (!this.props.following) return null;

    const following = this.props.following.map(followedAccount => {
      return (
        <div>
          <FollowingListItem key={followedAccount.id} followedAccount={followedAccount} />
        </div>
      );
    });

    return <div className='user-items'>{following}</div>;
  }
}

export default withRouter(FollowingList);
