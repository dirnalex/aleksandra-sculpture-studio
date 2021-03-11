import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import {HideScrollbar} from '../../ReuseStyles';
import {getRandomInt} from '../../utils/random';
import {Link} from 'react-router-dom';
import useExtendedRouteMatch from '../../hooks/useExtendedRouteMatch';
import {useIntl} from 'react-intl';
import useWorkList from '../../hooks/useWorkList';

const Page = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const WorkList = styled.ul`
  position: relative;
  z-index: 2;
  
  height: 100%;
  width: 100%;
  
  overflow: scroll;
  
  font-size: 2em;
  line-height: 100%;
  
  @media only screen and 
      (max-width: ${({theme}) => theme.mobileBreakpoint()}px) {
    font-size: 1.25em;
    line-height: 120%;   
  }
  ${HideScrollbar}
`;

const WorkItem = styled.li`
  margin-left: 250px;
  @media only screen and 
      (max-width: ${({theme}) => theme.mobileBreakpoint()}px) {
    margin-left: 50px;    
  }
  color: ${({disabled}) => disabled ? "dimgrey" : "black"};
  position: relative;
  display: table;
  cursor:pointer;
`;

const Number = styled.div`
  position: absolute;
  left: -55px;
  top: 4px;
  font-size: 0.6em;
  line-height: 133%;
`;

const Image = styled.div.attrs(({width, height, left, top, src}) => ({
  style: {
    width: `${width}px`,
    height: `${height}px`,
    top: `${top}px`,
    left: `${left}px`,
    backgroundImage: `url("${src}")`
  }
}))
  `
  position: absolute;
  
  transition: width 1s, height 1s, top 1s, left 1s;
  background-size: contain;
  background-repeat: no-repeat;
  font-size: 0.6em;
  line-height: 133%;
  z-index: 1;
`;

const WorkSelectPage = props => {
    const {locale} = useIntl();
    const {urlWithoutSlash} = useExtendedRouteMatch();

    const [workList, setWorkList] = useWorkList([]);
    const [itemHovering, setItemHovering] = useState();

  const handleWorkListScroll = ({currentTarget: {scrollTop, scrollHeight, clientHeight}, deltaY}) => {
    const scrollBottom = scrollHeight - scrollTop - clientHeight;
    if (deltaY > 0 && scrollBottom < Math.abs(deltaY)) {
      setWorkList(workList.slice(1).concat(workList.slice(0, 1)));
    }
    if (deltaY < 0 && scrollTop < Math.abs(deltaY)) {
      setWorkList(workList.slice(-1).concat(workList.slice(0, -1)));
    }
  };

  const pageRef = useRef(null);
  const imageZoneWidth = window.innerWidth;
  const imageZoneHeight = window.innerHeight;
  const imageWidth = Math.round(imageZoneWidth * 0.4);
  const imageHeight = Math.round(imageZoneHeight * 0.4);
  const imageLeft = getRandomInt(0, window.innerWidth - imageWidth);
  const imageTop = getRandomInt(0, window.innerHeight - imageHeight);

  return (
    <Page ref={pageRef}>
      <WorkList onWheel={handleWorkListScroll}>
        {workList
          .filter(work => work.id && work.name && work.name[locale])
          .map(work =>
            <WorkItem disabled={!work.imageLink} key={work.id}
                      onMouseEnter={() => setItemHovering(work)}>
              <Link to={work.imageLink ? `${urlWithoutSlash}/${work.id}` : undefined}>
                {itemHovering && work.id === itemHovering.id && <Number>{work.id}</Number>}
                {work.name[locale]}
              </Link>
            </WorkItem>
          )}
      </WorkList>
      {itemHovering && itemHovering.id && itemHovering.imageLink &&
      <Image key={itemHovering.id} width={imageWidth} height={imageHeight} left={imageLeft} top={imageTop}
               src={itemHovering.imageLink}/>
        }
      </Page>
    );
  }
;

WorkSelectPage.propTypes = {};

export default WorkSelectPage;