import React from 'react';
import {useIntl} from 'react-intl';
import styled from 'styled-components';
import Video from '../../components/Video';
import {Link} from 'react-router-dom';
import {Blinking, StandardTopBottomMargin} from '../../ReuseStyles';

const PageContainer = styled.div`
  ${StandardTopBottomMargin};
  position: relative;
`;

const StyledLink = styled(Link)`
  ${Blinking()};
  :hover {
    animation: none;
    color: ${({theme}) => theme.app.emphasisedTextColor};
  }
  
  position: absolute;
  bottom: -${({theme}) => theme.app.bottomMargin + theme.menu.itemHeight}px;
  @media only screen and 
      (max-width: ${({theme}) => theme.mobileBreakpoint()}px) {
    bottom: 0;    
  }
  left: 50%;
  transform: translateX(-50%);
  
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0.055em;
  text-align: center;
  display: flex;
  width: 100%;
  justify-content: center;
`;

const WorkVideoPage = ({link, title, workLink, isYouTube}) => {
  const {locale} = useIntl();
  return (
    <PageContainer>
      <Video link={link} title={title && title[locale]} isYouTube={isYouTube}/>
      <StyledLink to={workLink.link[locale]}>
        {workLink.text[locale]}
      </StyledLink>
    </PageContainer>
  );
};

export default WorkVideoPage;