import React from 'react';
import { Link } from 'react-router-dom';

class ItemIndex extends React.Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
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
    );
  };
}

export default ItemIndex;