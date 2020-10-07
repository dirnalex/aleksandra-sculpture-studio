import React, {createRef, useRef} from 'react';
import useResize from '../hooks/useResize';
import usePagination from '../hooks/usePagination';
import useHorizontalScroll from '../hooks/useHorizontalScroll';
import useNoScrollOnWheel from '../hooks/useNoScrollOnWheel';
import useScroll from '../hooks/useScroll';
import {generateArrayFillingWith} from '../utils/array';
import {
  PageSlider,
  StyledArrowLeft,
  StyledArrowRight,
  StyledHorizontalScroll,
  StyledPage
} from './HorizontalScrollStyles';

const HorizontalScroll = ({children, className}) => {
  const amountOfPages = children.length;

  const containerRef = useRef(null);
  const pageRefs = useRef(generateArrayFillingWith({size: amountOfPages, generateFunc: createRef}));

  const handlePageChange = (page) => {
    console.debug(`Scrolling automatically to page ${pageRefs.current[page].current.id}`);
    pageRefs.current[page].current.scrollIntoView({behavior: "smooth", inline: "start"});
  };

  const {incrementPage, decrementPage, isFirstPage, isLastPage} = usePagination(0, amountOfPages, handlePageChange);

  const [handleScroll, scrollLeftRatio] = useScroll();

  const handleWheel = useHorizontalScroll(incrementPage, decrementPage);

  useNoScrollOnWheel(containerRef);

  const {width} = useResize(containerRef);
  const sliderWidth = width / children.length;

  return (
    <StyledHorizontalScroll ref={containerRef} className={className} onScroll={handleScroll} onWheel={handleWheel}>
      <PageSlider left={scrollLeftRatio * width} width={sliderWidth}/>
      {!isFirstPage && <StyledArrowLeft onClick={decrementPage}/>}
      {!isLastPage && <StyledArrowRight onClick={incrementPage}/>}
      {children.map((child, index) => <StyledPage key={index} id={index}
                                                  ref={pageRefs.current[index]}>{child}</StyledPage>)}
    </StyledHorizontalScroll>
  );
};

HorizontalScroll.propTypes = {};

export default HorizontalScroll;