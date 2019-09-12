import React from 'react';
import { Link } from 'react-router-dom';
import ItemIndexItem from './item_index_item';

class ItemIndex extends React.Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    const items = this.props.items.map(item => {
      return (
        <a key={item.id} className='item-card' href="/#/feed/">

            {/* <div>
              <ItemIndexItem
                key={item.id}  
                item={item}
            /> */}
         
          <div className='index-item-container'>
            <div className='image-container'>
              <img width="50" height="50" className='item-photo' src="https://tshop.r10s.jp/habanakoubou-tomato/cabinet/chukohanbai/camera10/9394.jpg?downsize=200:*" alt="" />
            </div>
            <p className='index-item-price'>${item.price}</p>
          </div>
        </a>
      )
    });

    return (
      <div className='top'>
        <div className='item-master'>
          <div className='item-index-item'>
            { items }
          </div>
        </div>
      </div>
    );
  };
}

export default ItemIndex;