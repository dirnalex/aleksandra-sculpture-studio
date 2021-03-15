import React, {useEffect, useState} from 'react';
import useWindowResize from '../hooks/useWindowResize';
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
  const {windowWidth} = useWindowResize();

  const [sliderWidth, setSliderWidth] = useState(0);
  useEffect(() => {
    if (amountOfPages > 0) {
      setSliderWidth(windowWidth / amountOfPages);
    }
  }, [windowWidth, amountOfPages]);

  return (
    <SliderContainer>
      <Slider sliderLeft={scrollLeftRatio * windowWidth} sliderWidth={sliderWidth}/>
    </SliderContainer>
  );
};

export default PageSlider;