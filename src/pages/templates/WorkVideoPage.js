import React from 'react';
import {useIntl} from 'react-intl';
import styled from 'styled-components';
import Video from '../../components/Video';
import {NavLink} from 'react-router-dom';
import {Blinking, StandardTopBottomMargin} from '../../ReuseStyles';

const PageContainer = styled.div`
  ${StandardTopBottomMargin};
  position: relative;
`;

const StyledLink = styled(NavLink)`
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

const WorkVideoPage = ({link, title, workLink}) => {
  const {locale} = useIntl();
  return (
    <PageContainer>
      <Video title={title[locale]}>
        <source src={link}/>
        Sorry, your browser doesn't support embedded videos.
      </Video>
      <StyledLink exact to={workLink.link}>
        {workLink.text[locale]}
      </StyledLink>
    </PageContainer>
  );
};

export default WorkVideoPage;