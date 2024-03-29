import React, {useLayoutEffect, useRef, useState} from 'react';
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
  white-space: pre-line;
`;

const More = styled.div`
  font-family: NeueMontrealRegular, sans-serif;
  cursor: pointer;
  display: table;
  font-size: 0.43em;
  line-height: 100%;
  margin-top: 1em;
`;

const MoreText = styled.div`
  line-height: 150%;
  font-weight: 300;
  padding-left: 20%;
  padding-top: 1em;
  text-transform: none;
  white-space: pre-line;
  
  animation: 1s cubic-bezier(0.22, 1, 0.36, 1) goDown;
  
  @keyframes goDown {
    from {
      transform: translateY(-50%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const TextWithMorePage = ({text, moreText}) => {
  const intl = useIntl();
  const {locale} = intl;
  const moreTextRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const [showingMore, setShowingMore] = useState(false);

  useLayoutEffect(() => {
    if (showingMore && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: moreTextRef.current.offsetTop - 100,
        behavior: "smooth"
      });
    }
  }, [showingMore]);

  const toggleMore = () => {
    setShowingMore(prevMore => !prevMore);
  };

  return text && text[locale] ?
    <PageContainer>
      <VerticalScroll scrollRef={scrollContainerRef}>
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
          <MoreText ref={moreTextRef}>{moreText[locale]}</MoreText>
          }
        </ContentContainer>
      </VerticalScroll>
    </PageContainer>
    : null;
};

export default TextWithMorePage;