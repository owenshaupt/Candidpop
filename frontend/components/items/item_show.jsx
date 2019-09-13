import React from 'react';
import { Link } from 'react-router-dom';

class ItemShow extends React.Component {
  constructor(props) {
    super(props);
    debugger
    // this.state = this.props.item
  }

  componentDidMount() {
    this.props.fetchItem(this.props.item.itemId)
  }

  render() {
    return (
      <div>show!!
        {/* {this.props.item} */}
      </div>
    );
  };
}

export default ItemShow;

// why is state not persisting on refresh, where as it seems
// to persist in that way when on the feed?
//
// weird refresh behavior
//
// full items state comes through on /items/1 after navigating
// there from /feed/ but not on refresh -- have to do with
// the times being loaded on the feed? if so, then why does feed
// get global items state when it mounts when coming from, say,
// the homepage??