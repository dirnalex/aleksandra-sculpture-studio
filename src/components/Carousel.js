import React, {useRef} from 'react';
import useResize from '../hooks/useResize';
import usePagination, {getSafePage} from '../hooks/usePagination';
import useHorizontalScroll from '../hooks/useHorizontalScroll';
import {PageSlider, StyledArrowLeft, StyledArrowRight, StyledCarousel} from './CarouselStyles';

const Carousel = ({children, className, initialPage, onPageChange}) => {
  const size = children.length;
  const {page = 0, incrementPage, decrementPage, isFirstPage, isLastPage} = usePagination(initialPage, size, onPageChange);
  const handleWheel = useHorizontalScroll(incrementPage, decrementPage);
  const ref = useRef(null);
  const {width} = useResize(ref);

  const sliderWidth = width / children.length;

  return (
    <StyledCarousel className={className} ref={ref} onWheel={handleWheel}>
      <PageSlider left={page * sliderWidth} width={sliderWidth}/>
      {!isFirstPage && <StyledArrowLeft onClick={decrementPage}/>}
      {!isLastPage && <StyledArrowRight onClick={incrementPage}/>}
      {children[page]}
    </StyledCarousel>
  );
};

Carousel.propTypes = {};

export default Carousel;