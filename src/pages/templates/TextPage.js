import React from 'react';
import {useIntl} from 'react-intl';
import styled from 'styled-components';
import {StandardTopBottomMargin} from '../../ReuseStyles';
import VerticalScroll from '../../components/Vertical Scroll';

const PageContainer = styled.div`
  ${StandardTopBottomMargin};
  max-width: 930px;
`;

const ContentContainer = styled.div`
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  overflow-y: scroll;
`;

const Text = styled.p`
  font-family: NeueMontrealLight, sans-serif;
  font-weight: 300;
  font-size: 1.75em;
  line-height: 129%;
  /*text-indent: 10%;
  @media only screen and (max-width : 800px) {
    text-indent: 0;
  }*/
`;

const TextPage = ({text}) => {
  const {locale} = useIntl();
  return (
    <PageContainer>
      <VerticalScroll>
        <ContentContainer>
          <Text>
            {text[locale]}
          </Text>
        </ContentContainer>
      </VerticalScroll>
    </PageContainer>
  );
};

export default TextPage;