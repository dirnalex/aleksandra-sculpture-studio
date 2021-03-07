import {useLayoutEffect} from 'react';

export default (ref) => useLayoutEffect(() => {
  const {current} = ref;
  if (current) {
    const preventDefault = (e) => {
      e.preventDefault();
    };
    current.addEventListener("wheel", preventDefault, {passive: false});
    return () => {
      current.removeEventListener("wheel", preventDefault);
    };
  }
}, [ref]);