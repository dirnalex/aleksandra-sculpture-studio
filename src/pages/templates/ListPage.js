import React from 'react';
import styled from 'styled-components';
import {useIntl} from 'react-intl';
import VerticalScroll from '../../components/Vertical Scroll';

const PageContainer = styled.div`
`;

const ContentContainer = styled.div`
  width: 100%;
  min-height: 100%;
`;

const Section = styled.section`
  margin-bottom: 24px;
  
  &:first-child {
    @media only screen and 
      (min-width: ${({theme}) => theme.mobileBreakpoint() + 1}px) {
      margin-top: ${({theme}) => theme.app.topMargin * 2 + theme.menu.itemHeight}px;  
    }
  }
  
  &:last-child {
    @media only screen and 
      (min-width: ${({theme}) => theme.mobileBreakpoint() + 1}px) {
      margin-bottom: ${({theme}) => theme.app.bottomMargin * 2 + theme.menu.itemHeight}px;  
    }
  }
`;

const SectionHeading = styled.h1`
  margin-bottom: 8px;
`;

const Item = styled.li`
  font-size: 0.75em;
  line-height: 133%;
`;

const ListPage = ({list}) => {
  const {locale} = useIntl();
  if (!Array.isArray(list)) return null;
  return (
    <PageContainer>
      <VerticalScroll>
        <ContentContainer>
          {list.map(({title = {}, items = []}) =>
            <Section key={title[locale]}>
              {title[locale] && <SectionHeading>{title[locale]}</SectionHeading>}
              <ul>
                {items.filter(item => item[locale]).map(item => <Item key={item[locale]}>{item[locale]}</Item>)}
              </ul>
            </Section>
          )}
        </ContentContainer>
      </VerticalScroll>
    </PageContainer>
  );
};

export default ListPage;