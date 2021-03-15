import {useRef, useState} from 'react';

export default (onScrollStop) => {
  const [scrollLeftRatio, setScrollLeftRatio] = useState(0);
  const scrollingTimerRef = useRef(null);

  const handleScroll = ({currentTarget: scrollable}) => {
    if (scrollingTimerRef.current) {
      clearTimeout(scrollingTimerRef.current)
    }
    scrollingTimerRef.current = setTimeout(() => {
      onScrollStop(scrollLeftRatio);
    }, 150);
    setScrollLeftRatio(scrollable.scrollLeft / scrollable.scrollWidth);
  };

  return [handleScroll, scrollLeftRatio];
};