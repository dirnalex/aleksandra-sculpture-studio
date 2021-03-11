import React from 'react';

import {StyledHorizontalScroll} from './AboutPageStyles';
import usePageDescriptions from '../../hooks/usePageDescriptions';
import {renderPage} from '../../utils/pageDescription';

const AboutPage = () => {
  const {loadedPageDescriptions: pageDescriptions} = usePageDescriptions('/data/about');

  return (
    <StyledHorizontalScroll>
      {pageDescriptions.map((desc, i) => renderPage(desc, i))}
    </StyledHorizontalScroll>
  );
};

AboutPage.propTypes = {};

export default AboutPage;