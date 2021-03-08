import {useLayoutEffect} from 'react';

export default () => useLayoutEffect(() => {
  const preventDefault = (e) => {
    if (e.deltaX !== 0) {
      e.preventDefault();
    }
  };
  window.addEventListener("wheel", preventDefault, {passive: false});
  return () => {
    window.removeEventListener("wheel", preventDefault);
  };
}, []);