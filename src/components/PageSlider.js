import React, {useEffect, useRef, useState} from 'react';
import useResize from '../hooks/useResize';
import styled from 'styled-components';
import useIsMini from '../hooks/useIsMini';

const SliderContainer = styled.div`
  position: absolute;
  width: 100%;
  z-index: 100;
`;

const MiniSlider = styled.div`
  position: absolute;
  display: flex;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
`;

const Dot = styled.div`
  display: inline-block;
  height: 5px;
  width: 5px;
  border-radius: 5px;
  background-color: ${props => props.selected ? '#00EED1' : 'black'};
  margin-right: 15px;
  
  &:last-child {
    margin-right: 0;
  }
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
  const mini = useIsMini(width);

  const [sliderWidth, setSliderWidth] = useState(0);
  useEffect(() => {
    if (amountOfPages > 0) {
      setSliderWidth(width / amountOfPages);
    }
  }, [width, amountOfPages]);

  return (
    <SliderContainer ref={containerRef}>
      {mini ?
        <MiniSlider>
          {[...Array(amountOfPages)].map((x, i) =>
            <Dot key={i} selected={i === Math.round(scrollLeftRatio * amountOfPages)}/>
          )}
        </MiniSlider>
        :
        <Slider sliderLeft={scrollLeftRatio * width} sliderWidth={sliderWidth}/>
      }
    </SliderContainer>
  );
};

export default PageSlider;