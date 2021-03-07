import React, {useContext, useEffect, useState} from 'react';
import {StyledTitle, StyledVideo, StyledWrapper} from './VideoStyles';
import CursorChangeContext from '../contexts/CursorChangeContext';

const Video = ({title, children, className}) => {
  const changeCursor = useContext(CursorChangeContext);
  const [playing, setPlaying] = useState(false);

  const handleVideoClick = ({currentTarget: video}) => {
    if (!video.controls) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  const handleVideoMouseMove = ({currentTarget: video}) => {
    if (!video.controls) {
      changeCursor({text: playing ? 'pause' : 'play'});
    }
  };

  const handleVideoPlay = ({currentTarget: video}) => {
    setPlaying(true);
    if (!video.controls) {
      changeCursor({text: 'pause'});
    }
  };

  const handleVideoPause = ({currentTarget: video}) => {
    setPlaying(false);
    if (!video.controls) {
      changeCursor({text: 'play'});
    }
  };

  useEffect(() => () => {
    changeCursor();
  }, []);

  return (
    <StyledWrapper className={className}>
      {title && !playing && <StyledTitle>{title}</StyledTitle>}
      <StyledVideo onClick={handleVideoClick} onMouseMove={handleVideoMouseMove}
                   onMouseLeave={() => changeCursor()} onPlay={handleVideoPlay} onPause={handleVideoPause}>
        {children}
      </StyledVideo>
    </StyledWrapper>
  );
};

Video.propTypes = {};

export default Video;