import React, {useState} from 'react';
import styled from 'styled-components';
import {useIntl} from 'react-intl';
import VerticalScroll from '../../components/Vertical Scroll';
import {StandardTopBottomMargin} from '../../ReuseStyles';

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
  font-family: NeueMontrealLight, sans-serif;
`;


const Text = styled.div`
  font-weight: 300;
  font-size: 1.75em;
  line-height: 129%;
`;

const More = styled.div`
  font-family: NeueMontrealRegular, sans-serif;
  cursor: pointer;
  display: inline-block;
  font-size: 0.43em;
  line-height: 100%;
  position: relative;
  top: 6px;
  left: 5px;
`;

const MoreText = styled.div`
  line-height: 150%;
  font-weight: 300;
  padding-left: 20%;
  padding-top: 1em;
  text-transform: none;
  white-space: pre-line;
`;

const TextWithMorePage = ({text, moreText}) => {
  const intl = useIntl();
  const {locale} = intl;

  const [showingMore, setShowingMore] = useState(false);

  const toggleMore = () => {
    setShowingMore(prevMore => !prevMore);
  };

  return text && text[locale] ?
    <PageContainer>
      <VerticalScroll>
        <ContentContainer>
          <Text>
            {text[locale]}
            {moreText && moreText[locale] &&
            <More onClick={toggleMore}>
              {showingMore ? intl.formatMessage({id: "less"}) : intl.formatMessage({id: "more"})}
            </More>
            }
          </Text>
          {moreText && moreText[locale] && showingMore &&
          <MoreText>{moreText[locale]}</MoreText>
          }
        </ContentContainer>
      </VerticalScroll>
    </PageContainer>
    : null;
};

export default TextWithMorePage;