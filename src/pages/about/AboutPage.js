import React from 'react';

import AboutFirstPage from './AboutFirstPage';
import AboutSecondPage from './AboutSecondPage';
import ConnectParamToLastPartOfRoute from '../../components/wrappers/ConnectParamToLastPartOfRoute';

import {StyledCarousel} from './AboutPageStyles';

const AboutPage = props => {
  return (
    <ConnectParamToLastPartOfRoute defaultParam="0">
      {(param, changeRouteParam) => (
        <StyledCarousel initialPage={param} onPageChange={changeRouteParam}>
          <AboutFirstPage/>
          <AboutSecondPage/>
        </StyledCarousel>
      )}
    </ConnectParamToLastPartOfRoute>
  );
};

AboutPage.propTypes = {};

export default AboutPage;