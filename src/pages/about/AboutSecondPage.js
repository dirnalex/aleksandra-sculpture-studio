import React from 'react';
import Video from '../../components/Video';
import {useIntl} from 'react-intl';
import styled from 'styled-components';

const StyledVideo = styled(Video)`
  padding: 50px 210px 50px 240px;
`;

const AboutSecondPage = props => {
  const intl = useIntl();

  return (
    <StyledVideo title={intl.formatMessage({id: "about.1.video.title"})}>
      <source src="/video.mp4" type="video/mp4"/>
      Sorry, your browser doesn't support embedded videos.
    </StyledVideo>
  );
};


AboutSecondPage.propTypes = {};

export default AboutSecondPage;