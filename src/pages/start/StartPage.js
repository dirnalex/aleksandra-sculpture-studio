import React from 'react';
import {StyledHorizontalScroll} from '../about/AboutPageStyles';
import usePageDescriptions from '../../hooks/usePageDescriptions';
import {renderPage} from '../../utils/pageDescription';
import Loading from '../../components/Loading';


const StartPage = () => {
  const [pageDescriptions, loading] = usePageDescriptions('/data/start');

  if (loading) return <Loading/>;
  if (!Array.isArray(pageDescriptions)) return null;
  return (
    <StyledHorizontalScroll>
      {pageDescriptions.map((desc, i) => renderPage(desc, i))}
    </StyledHorizontalScroll>
  );
};

export default StartPage;