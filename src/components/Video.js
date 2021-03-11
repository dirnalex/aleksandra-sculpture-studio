import React, {useContext, useState} from 'react';
import {StyledTitle, StyledVideo, StyledWrapper, StyledYoutubeVideo} from './VideoStyles';
import CursorChangeContext from '../contexts/CursorChangeContext';

const Video = ({title, link, isYouTube, className}) => {
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

  const handleVideoMouseEnter = ({currentTarget: video}) => {
    if (!video.controls) {
      changeCursor({text: playing ? 'pause' : 'play'});
    }
  };

  const handleVideoMouseOut = () => {
    changeCursor();
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

  return (
    <StyledWrapper className={className}>
      {!isYouTube && title && !playing && <StyledTitle>{title}</StyledTitle>}
      {isYouTube ?
        <StyledYoutubeVideo src={link} frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen/>
        :
        <StyledVideo onClick={handleVideoClick} onMouseEnter={handleVideoMouseEnter} onMouseOut={handleVideoMouseOut}
                     onMouseLeave={() => changeCursor()} onPlay={handleVideoPlay} onPause={handleVideoPause}>
          <source src={link}/>
          Sorry, your browser doesn't support embedded videos.
        </StyledVideo>
      }
    </StyledWrapper>
  );
};

Video.propTypes = {};

export default Video;