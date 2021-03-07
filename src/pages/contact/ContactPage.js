import React from 'react';
import usePageDescriptions from '../../hooks/usePageDescriptions';
import {StyledHorizontalScroll} from '../about/AboutPageStyles';
import {renderPage} from '../../utils/pageDescription';

const ContactPage = () => {
  const pageDescriptions = usePageDescriptions('/data/contact');

  return (
    <StyledHorizontalScroll>
      {pageDescriptions.map((desc, i) => renderPage(desc, i))}
    </StyledHorizontalScroll>
  );
};

export default ContactPage;