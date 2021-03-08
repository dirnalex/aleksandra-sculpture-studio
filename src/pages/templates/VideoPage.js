import React from 'react';
import {useIntl} from 'react-intl';
import styled from 'styled-components';
import Video from '../../components/Video';
import {StandardTopBottomMargin} from '../../ReuseStyles';

const PageContainer = styled.div`
  ${StandardTopBottomMargin};
`;

const VideoPage = ({link, title}) => {
  const {locale} = useIntl();
  return (
    <PageContainer>
      <Video title={title[locale]}>
        <source src={link}/>
        Sorry, your browser doesn't support embedded videos.
      </Video>
    </PageContainer>
  );
};

export default VideoPage;