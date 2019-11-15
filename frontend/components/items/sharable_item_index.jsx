import React, { useState, useEffect, useRef } from "react";

export default function SharableItemIndex(props) {
  const [items, setItems] = useState(null);
  const isMounted = useIsMounted();

  
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