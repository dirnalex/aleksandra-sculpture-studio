import React, {createRef, useContext, useEffect, useRef} from 'react';
import {useSwipeable} from 'react-swipeable';
import usePagination from '../hooks/usePagination';
import useHorizontalScroll from '../hooks/useHorizontalScroll';
import useNoScrollOnWheel from '../hooks/useNoScrollOnWheel';
import useScroll from '../hooks/useScroll';
import {generateArrayFillingWith} from '../utils/array';
import {StyledArrowLeft, StyledArrowRight, StyledHorizontalScroll, StyledPage} from './HorizontalScrollStyles';
import {ThemeContext} from 'styled-components';
import PageSlider from './PageSlider';

const HorizontalScroll = ({children, className}) => {
  const amountOfPages = children.length;

  const containerRef = useRef(null);
  const pageRefs = useRef([]);

  useEffect(() => {
    pageRefs.current = generateArrayFillingWith({size: amountOfPages, generateFunc: createRef});
  }, [amountOfPages]);

  const handlePageChange = (page) => {
    if (pageRefs.current[page] && pageRefs.current[page].current) {
      pageRefs.current[page].current.scrollIntoView({behavior: "smooth", inline: "start"});
    }
  };

  const {page, incrementPage, decrementPage, isFirstPage, isLastPage} = usePagination(0, amountOfPages, handlePageChange);

  const [handleScroll, scrollLeftRatio] = useScroll();

  const handleWheel = useHorizontalScroll(incrementPage, decrementPage);

  const handlers = useSwipeable({
    onSwipedRight: decrementPage,
    onSwipedLeft: incrementPage,
    preventDefaultTouchmoveEvent: true
  });

  useNoScrollOnWheel(containerRef);

  const theme = useContext(ThemeContext);
  useEffect(() => {
    if (children[page] && children[page].props && children[page].props.theme) {
      theme.setTheme(children[page].props.theme);
    } else {
      theme.setDefaultTheme();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children[page]]);

  return (amountOfPages === 0) ? null : (
    <StyledHorizontalScroll ref={containerRef} className={className}
                            onScroll={handleScroll} onWheel={handleWheel} {...handlers}>
      {amountOfPages > 1 && <PageSlider scrollLeftRatio={scrollLeftRatio} amountOfPages={amountOfPages}/>}
      {!isFirstPage && <StyledArrowLeft onClick={decrementPage}/>}
      {!isLastPage && <StyledArrowRight onClick={incrementPage}/>}
      {children.map((child, index) => <StyledPage key={index} id={index}
                                                  ref={pageRefs.current[index]}>{child}</StyledPage>)}
    </StyledHorizontalScroll>
  );
};

HorizontalScroll.propTypes = {};

export default HorizontalScroll;