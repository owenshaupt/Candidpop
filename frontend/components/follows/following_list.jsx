import React from "react";
import { withRouter } from "react-router-dom";
import FollowingListItem from "./following_list_item";

class FollowingList extends React.Component {
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
    if (!this.props.following) return null;

    const following = this.props.following.map(followedAccount => {
      return (
        <div key={followedAccount.id}>
          <FollowingListItem followedAccount={followedAccount} />
        </div>
      );
    });

    return <div className='user-items'>{following}</div>;
  }
}

export default withRouter(FollowingList);
