import React from 'react';
import {StyledHorizontalScroll} from '../about/AboutPageStyles';
import usePageDescriptions from '../../hooks/usePageDescriptions';
import {renderPage} from '../../utils/pageDescription';


const StartPage = () => {
  const {loadedPageDescriptions: pageDescriptions} = usePageDescriptions('/data/start');

  return (
    <StyledHorizontalScroll>
      {pageDescriptions.map((desc, i) => renderPage(desc, i))}
    </StyledHorizontalScroll>
  );
};

export default StartPage;