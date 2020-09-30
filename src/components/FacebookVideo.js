import React from 'react';
import useFacebookSdk from '../hooks/useFacebookSdk';

const FacebookVideo = ({url, className}) => {
  useFacebookSdk();

  return (
    <div className={`fb-video ${className}`} data-href={url} data-controls="false"/>
  );
};

FacebookVideo.propTypes = {};

export default FacebookVideo;