import React from "react";
import { Link } from "react-router-dom";

class ItemIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  componentDidMount() {
    const img = new Image();
    img.src = this.props.src;

    img.onload = () => {
      this.setState({ imageIsReady: true });
    };
  }

  render() {
    console.log('this.props', this.props)
    if (!this.state.imageIsReady) {
      return null;
    } else {
      return <img
        width='100%'
        height='100%'
        className='photo'
        src={this.props.src}
        alt=''
      />;
    }
  }
}

export default ItemIndexItem;
