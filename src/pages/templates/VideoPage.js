import React from 'react';
import {useIntl} from 'react-intl';
import styled from 'styled-components';
import Video from '../../components/Video';
import {StandardTopBottomMargin} from '../../ReuseStyles';

const PageContainer = styled.div`
  ${StandardTopBottomMargin};
`;

const VideoPage = ({link, title, isYouTube}) => {
  const {locale} = useIntl();
  return (
    <PageContainer>
      <Video link={link} title={title && title[locale]} isYouTube={isYouTube}/>
    </PageContainer>
  );
};

export default VideoPage;