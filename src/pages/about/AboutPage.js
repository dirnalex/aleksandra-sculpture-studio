import React from 'react';

import usePageDescriptions from '../../hooks/usePageDescriptions';
import {renderPage} from '../../utils/pageDescription';
import Loading from '../../components/Loading';
import styled from 'styled-components';
import HorizontalScroll from '../../components/HorizontalScroll';

const StyledHorizontalScroll = styled(HorizontalScroll)`
  width: 100%;
  height: 100%;
`;

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