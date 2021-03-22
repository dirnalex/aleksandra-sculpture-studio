import React, {useContext, useRef, useState} from 'react';
import {BlackScreen, StyledTitle, StyledVideo, StyledWrapper, StyledYoutubeVideo} from './VideoStyles';
import CursorChangeContext from '../contexts/CursorChangeContext';
import Loading from './Loading';

const Video = ({title, link, isYouTube, className}) => {
  const changeCursorText = useContext(CursorChangeContext);
  const [playing, setPlaying] = useState(false);
  let loadingRef = useRef(false);

  const canHover = window.matchMedia("(any-hover: hover)").matches;

  const handleLoadStart = () => {
    loadingRef.current = true;
  };

  const handleCanPlay = () => {
    loadingRef.current = false;
  };

  const handleVideoClick = ({currentTarget: video}) => {
    if (!loadingRef.current && !video.controls) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  const handleVideoMouseMove = ({currentTarget: video}) => {
    if (!video.controls && canHover) {
      changeCursorText(playing ? 'pause' : 'play');
    }
  };

  const handleVideoPlay = ({currentTarget: video}) => {
    setPlaying(true);
    if (!video.controls && canHover) {
      changeCursorText('pause');
    }
  };

  const handleVideoPause = ({currentTarget: video}) => {
    setPlaying(false);
    if (!video.controls && canHover) {
      changeCursorText('play');
    }
  };

  if (link && loadingRef.current) return <Loading/>;
  return (
    <StyledWrapper className={className}>
      {!isYouTube && title && !playing && <StyledTitle>{title}</StyledTitle>}
      {!link ?
        <BlackScreen onMouseMove={handleVideoMouseMove} onMouseLeave={() => changeCursorText()}/>
        :
        isYouTube ?
          <StyledYoutubeVideo src={link} frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen/>
          :
          <StyledVideo poster={/iPad|iPhone|iPod/.test(navigator.platform) && '/black-image.png'}
                       onClick={handleVideoClick}
                       onMouseMove={handleVideoMouseMove}
                       onMouseLeave={() => changeCursorText()}
                       onPlay={handleVideoPlay}
                       onPause={handleVideoPause}
                       onLoadStart={handleLoadStart}
                       onCanPlay={handleCanPlay}
                       onLoadedMetadata={handleCanPlay}
          >
            <source src={link}/>
            Sorry, your browser doesn't support embedded videos.
          </StyledVideo>
      }
    </StyledWrapper>
  );
};

Video.propTypes = {};

export default Video;