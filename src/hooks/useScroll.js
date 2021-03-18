import {useEffect} from 'react';

const noop = () => {
};

export default (scrollerRef, onScroll = noop) => {
  useEffect(() => {
    const scrollerEl = scrollerRef.current;
    if (scrollerEl) {
      scrollerEl.addEventListener('scroll', onScroll);
    }
    return () => {
      if (scrollerEl) {
        scrollerEl.removeEventListener('scroll', onScroll);
      }
    };
  }, [scrollerRef.current]);
};