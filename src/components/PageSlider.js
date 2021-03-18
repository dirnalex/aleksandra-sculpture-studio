import React, {useRef} from 'react';
import styled from 'styled-components';
import useScroll from '../hooks/useScroll';

const SliderContainer = styled.div`
  position: absolute;
  width: 100%;
  z-index: 100;
`;

const Slider = styled.div`
  width: ${props => props.sliderWidthPercent}%;
  position: absolute;
  height: 10px;
  background-color: #00EED1;
`;

const PageSlider = ({scrollerRef, amountOfPages = 0}) => {
  const sliderRef = useRef(null);

  const handleScroll = ({currentTarget: scrollable}) => {
    requestAnimationFrame(() => {
      const sliderEl = sliderRef.current;
      if (sliderEl) {
        sliderEl.style.left = (scrollable.scrollLeft * 100 / scrollable.scrollWidth) + '%';
      }
    });
  };

  useScroll(scrollerRef, handleScroll);

  if (!amountOfPages) return null;
  return (
    <SliderContainer>
      <Slider ref={sliderRef} sliderWidthPercent={100 / amountOfPages}/>
    </SliderContainer>
  );
};

export default PageSlider;