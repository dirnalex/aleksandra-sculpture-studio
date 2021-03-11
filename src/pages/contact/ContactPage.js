import React from 'react';
import usePageDescriptions from '../../hooks/usePageDescriptions';
import {StyledHorizontalScroll} from '../about/AboutPageStyles';
import {renderPage} from '../../utils/pageDescription';
import Loading from '../../components/Loading';

const ContactPage = () => {
  const [pageDescriptions, loading] = usePageDescriptions('/data/contact');

  if (loading) return <Loading/>;
  if (!Array.isArray(pageDescriptions)) return null;
  return (
    <StyledHorizontalScroll>
      {pageDescriptions.map((desc, i) => renderPage(desc, i))}
    </StyledHorizontalScroll>
  );
};

export default ContactPage;