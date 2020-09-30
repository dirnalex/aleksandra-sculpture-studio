import {useState} from 'react';

export default (onScrollRight, onScrollLeft) => {
  const [canScroll, setCanScroll] = useState(true);

  return (e) => {
    if (canScroll) {
      if (e.deltaX > 10) {
        onScrollRight();
        setCanScroll(false);
        setTimeout(() => setCanScroll(true), 1000);
      } else if (e.deltaX < -10) {
        onScrollLeft();
        setCanScroll(false);
        setTimeout(() => setCanScroll(true), 1000);
      }
    }
  };


};