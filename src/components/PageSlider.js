import React, {useEffect, useRef, useState} from 'react';
import useResize from '../hooks/useResize';
import styled from 'styled-components';

const SliderContainer = styled.div`
  position: absolute;
  width: 100%;
  z-index: 100;
`;

const Slider = styled.div.attrs(props => ({
  style: {
    left: `${props.sliderLeft}px`,
    width: `${props.sliderWidth}px`,
  }
}))`
  position: absolute;
  height: 10px;
  background-color: #00EED1;
`;

const PageSlider = ({scrollLeftRatio = 0, amountOfPages = 0}) => {
  const containerRef = useRef(null);
  const {width} = useResize(containerRef);

  const [sliderWidth, setSliderWidth] = useState(0);
  useEffect(() => {
    if (amountOfPages > 0) {
      setSliderWidth(width / amountOfPages);
    }
  }, [width, amountOfPages]);

  return (
    <SliderContainer ref={containerRef}>
      <Slider sliderLeft={scrollLeftRatio * width} sliderWidth={sliderWidth}/>
    </SliderContainer>
  );
};

export default PageSlider;