import React, { useState, useEffect } from "react";

export default function ItemIndexItem(props) {
  const [imageIsReady, setImageIsReady] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = props.src;

    img.onload = () => {
      setImageIsReady(true);
    };
  });

  if (!imageIsReady) return null;

  return (
    <div className='item-fade-in'>
      <div className='hover-black'>
        <img
          width='100%'
          height='100%'
          className='photo'
          src={props.src}
          alt=''
        />
      </div>
    </div>
  );
}
