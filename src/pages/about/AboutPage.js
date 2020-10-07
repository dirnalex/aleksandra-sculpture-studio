import React from 'react';

import AboutFirstPage from './AboutFirstPage';
import AboutSecondPage from './AboutSecondPage';

import {StyledHorizontalScroll} from './AboutPageStyles';

const AboutPage = () => {
  return (
    <StyledHorizontalScroll>
      <AboutFirstPage/>
      <AboutSecondPage/>
    </StyledHorizontalScroll>
  );
};

AboutPage.propTypes = {};

export default AboutPage;