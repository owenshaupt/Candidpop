import React from 'react';

class ItemIndexItem extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className='index-item-props'>
        <img width="245" height="245" className='item-photo' src="https://tshop.r10s.jp/habanakoubou-tomato/cabinet/chukohanbai/camera10/9394.jpg?downsize=200:*" alt=""/>
      </div>
    );
  };
}

export default ItemIndexItem;