import React, { useState, useEffect, useRef } from "react";

export default function ItemIndexItem(props) {
  const [imageIsReady, setImageIsReady] = useState(false);
  const isMounted = useIsMounted();

  useEffect(() => {
    let img = new Image();
    img.src = props.src;

    img.onload = () => {
      if (isMounted.current) {
        setImageIsReady(true);
      }
    };

    return () => {
      img = null;
    };
  });

  if (!imageIsReady) return null;

  return (
    <div className='item-fade-in'>
      <div className='hover-black'>
        <img
          width='100%'
          height='100%'
          className={props.type === "index" ? "photo" : "show-photo"}
          src={props.src}
          alt=''
        />
      </div>
    </div>
  );
}

function useIsMounted() {
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
}