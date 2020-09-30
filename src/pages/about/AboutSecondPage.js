import React, {useContext, useEffect, useState} from 'react';
import CursorChangeContext from '../../contexts/CursorChangeContext';
import {StyledTitle, StyledVideo, StyledWrapper} from './AboutSecondPageStyles';

const AboutSecondPage = props => {
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
    <StyledWrapper>
      {!playing && <StyledTitle>volumeen</StyledTitle>}
      <StyledVideo onClick={handleVideoClick} onMouseMove={handleVideoMouseMove}
                   onMouseLeave={() => changeCursor()} onPlay={handleVideoPlay} onPause={handleVideoPause}>
        <source src="/video.mp4" type="video/mp4"/>
        Sorry, your browser doesn't support embedded videos.
      </StyledVideo>
    </StyledWrapper>
  );
};


AboutSecondPage.propTypes = {};

export default AboutSecondPage;