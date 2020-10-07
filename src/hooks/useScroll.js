import {useState} from 'react';

export default () => {
  const [scrollLeftRatio, setScrollLeftRatio] = useState(0);

  const handleScroll = ({currentTarget: scrollable}) => {
    setScrollLeftRatio(scrollable.scrollLeft / scrollable.scrollWidth);
  };

  return [handleScroll, scrollLeftRatio];
};