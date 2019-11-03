import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    <img
      width='100%'
      height='100%'
      className='photo'
      src={props.src}
      alt=''
    />
  );
}
