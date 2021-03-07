import React from 'react';
import {useIntl} from 'react-intl';
import styled from 'styled-components';
import Video from '../../components/Video';
import {NavLink} from 'react-router-dom';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledVideo = styled(Video)`
  padding: 130px 150px;
`;

const StyledLink = styled(NavLink)`
  position: absolute;
  bottom: 33px;
  left: 50%;
  transform: translateX(-50%);
  
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0.055em;
  text-align: left;
`;

const WorkVideoPage = ({link, title, workLink}) => {
  const {locale} = useIntl();
  return (
    <Container>
      <StyledVideo title={title[locale]}>
        <source src={link}/>
        Sorry, your browser doesn't support embedded videos.
      </StyledVideo>
      <StyledLink exact to={workLink.link}>
        {workLink.text[locale]}
      </StyledLink>
    </Container>
  );
};

export default WorkVideoPage;