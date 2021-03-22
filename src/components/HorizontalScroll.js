import React, {createRef, useContext, useEffect, useRef} from 'react';
import usePagination from '../hooks/usePagination';
import useScroll from '../hooks/useScroll';
import {generateArrayFillingWith} from '../utils/array';
import {StyledArrowLeft, StyledArrowRight, StyledHorizontalScroll, StyledPage} from './HorizontalScrollStyles';
import {ThemeContext} from 'styled-components';
import PageSlider from './PageSlider';
import useWindowResize from '../hooks/useWindowResize';

const HorizontalScroll = ({children, className}) => {
  const amountOfPages = children.length;

  const containerRef = useRef(null);
  const pageRefs = useRef([]);

  useEffect(() => {
    pageRefs.current = generateArrayFillingWith({size: amountOfPages, generateFunc: createRef});
  }, [amountOfPages]);

  const handlePageChange = (page, behavior) => {
    if (pageRefs.current[page] && pageRefs.current[page].current) {
      pageRefs.current[page].current.scrollIntoView({behavior, inline: "start"});
    }
  };

  const {windowWidth} = useWindowResize();

  const {page, incrementPage, decrementPage, setPage, isFirstPage, isLastPage} = usePagination(0, amountOfPages);

  useEffect(() => {
    handlePageChange(page.current, "smooth");
  }, [page]);

  useEffect(() => {
    handlePageChange(page.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowWidth]);

  const scrollingTimerRef = useRef(null);
  useScroll(containerRef, ({currentTarget: scrollable}) => {
    if (scrollingTimerRef.current) {
      clearTimeout(scrollingTimerRef.current)
    }
    scrollingTimerRef.current = setTimeout(() => {
      setPage(Math.round((scrollable.scrollLeft / scrollable.scrollWidth) * amountOfPages));
    }, 100);
  });

  const theme = useContext(ThemeContext);
  useEffect(() => {
    if (children[page.current] && children[page.current].props && children[page.current].props.theme) {
      theme.setTheme(children[page.current].props.theme);
    } else {
      theme.setDefaultTheme();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children[page.current]]);

  return (amountOfPages === 0) ? null : (
    <StyledHorizontalScroll ref={containerRef} className={className}>
      {amountOfPages > 1 && <PageSlider scrollerRef={containerRef} amountOfPages={amountOfPages}/>}
      {!isFirstPage && <StyledArrowLeft onClick={decrementPage}/>}
      {!isLastPage && <StyledArrowRight onClick={incrementPage}/>}
      {children.map((child, index) => <StyledPage key={index} id={index}
                                                  ref={pageRefs.current[index]}>{child}</StyledPage>)}
    </StyledHorizontalScroll>
  );
};

HorizontalScroll.propTypes = {};

export default HorizontalScroll;