import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import ItemIndexItem from "./item_index_item";

export default function SharableItemIndex(props) {
  let [items, setItems] = useState(props.items);

  console.log(props);

  useEffect(() => {
    setItems(props.items);
  });

  const index = items.map(item => {
    return (
      <li key={item.id} className='items-index-li'>
        <div className='items-index-item'>
          <Link className='item-card-link' to={`/items/${item.id}`}>
            <div className='image-grey-out'>
              <div className='index-item-photo'>
                <LazyLoad>
                  <ItemIndexItem type='index' src={item.photos[0].photoUrl} />
                </LazyLoad>
              </div>
            </div>
            <p className='index-item-price'>${item.price}</p>
          </Link>
        </div>
      </li>
    );
  });

  return (
    <ul className='items-list'>
      {index}
      <i className='filler-items' aria-hidden='true'></i>
      <i className='filler-items' aria-hidden='true'></i>
      <i className='filler-items' aria-hidden='true'></i>
      <i className='filler-items' aria-hidden='true'></i>
      <i className='filler-items' aria-hidden='true'></i>
    </ul>
  );
}
