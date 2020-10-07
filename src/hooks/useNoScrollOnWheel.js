import {useEffect} from 'react';

export default (ref) => useEffect(() => {
  const preventDefault = (e) => {
    e.preventDefault();
  };
  ref.current.addEventListener("wheel", preventDefault, {passive: false});
  return () => {
    ref.current.removeEventListener("wheel", preventDefault);
  };
}, []);