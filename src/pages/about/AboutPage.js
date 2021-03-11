import React from 'react';

import {StyledHorizontalScroll} from './AboutPageStyles';
import usePageDescriptions from '../../hooks/usePageDescriptions';
import {renderPage} from '../../utils/pageDescription';
import Loading from '../../components/Loading';

const AboutPage = () => {
  const [pageDescriptions, loading] = usePageDescriptions('/data/about');

  if (loading) return <Loading/>;
  if (!Array.isArray(pageDescriptions)) return null;
  return (
    <StyledHorizontalScroll>
      {pageDescriptions.map((desc, i) => renderPage(desc, i))}
    </StyledHorizontalScroll>
  );
};

AboutPage.propTypes = {};

export default AboutPage;