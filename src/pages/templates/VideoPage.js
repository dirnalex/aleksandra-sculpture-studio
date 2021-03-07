import React from 'react';
import {useIntl} from 'react-intl';
import styled from 'styled-components';
import Video from '../../components/Video';

const StyledVideo = styled(Video)`
  padding: 130px 150px;
`;

const VideoPage = ({link, title}) => {
  const {locale} = useIntl();
  return (
    <StyledVideo title={title[locale]}>
      <source src={link}/>
      Sorry, your browser doesn't support embedded videos.
    </StyledVideo>
  );
};

export default VideoPage;