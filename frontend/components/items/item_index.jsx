import React from "react";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/core";
import SharableItemIndex from "./sharable_item_index";

const override = css`
  display: block;
  margin: 0 auto;
`;

class ItemIndex extends React.Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  componentWillUnmount() {
    this.props.clearItems();
  }

  render() {
    if (!this.props.items) {
      return (
        <div className='page-loading'>
          <ClipLoader
            css={override}
            sizeUnit={"px"}
            size={42}
            color={"#282828"}
            loading={true}
          />
        </div>
      );
    }

    return (
      <div className='items-index-container'>
        <div className='items-list-container'>
          <SharableItemIndex items={this.props.items} userShow={false}/>
        </div>
      </div>
    );
  }
}

export default ItemIndex;
