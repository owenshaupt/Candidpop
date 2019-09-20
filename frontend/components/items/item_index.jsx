import React from 'react';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/core';

const override = css`
    display: block;
    margin: 0 auto;
`;

class ItemIndex extends React.Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    if (!this.props.items) {
      return (
        <div className='page-loading'>
          <ClipLoader
            css={override}
            sizeUnit={"px"}
            size={42}
            color={'#282828'}
            loading={true}
          />
        </div>
      );
    }

    const items = this.props.items.map(item => {
      return (
        <li key={item.id} className='items-index-li'>
          <div className='items-index-item'>
            <Link className='item-card-link' to={`/items/${item.id}`}>
                <div className='image-grey-out'>
                  <div className='index-item-photo'>
                    <img width="100%"
                      height="100%"
                      className='photo'
                      src={item.photos[0].photoUrl}
                      alt=""
                    />
                  </div>
                </div>
                <p className='index-item-price'>${item.price}</p>
            </Link>
          </div>
        </li>
      )
    });

    return (
      <div className='items-index-container'>
        <div className='items-list-container'>
          <ul className='items-list'>
            {items}
            <i className='filler-items' aria-hidden="true"></i>
            <i className='filler-items' aria-hidden="true"></i>
            <i className='filler-items' aria-hidden="true"></i>
            <i className='filler-items' aria-hidden="true"></i>
            <i className='filler-items' aria-hidden="true"></i>
          </ul>
        </div>
      </div>
    );
  };
}

export default ItemIndex;