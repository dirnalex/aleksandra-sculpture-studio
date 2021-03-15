import React from 'react';
import styled from 'styled-components';
import {HideScrollbar} from '../../ReuseStyles';
import {getRandomInt} from '../../utils/random';
import {Link} from 'react-router-dom';
import useExtendedRouteMatch from '../../hooks/useExtendedRouteMatch';
import {useIntl} from 'react-intl';
import useWorkList from '../../hooks/useWorkList';
import Loading from '../../components/Loading';
import {useSwipeable} from 'react-swipeable';

const Page = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const WorkList = styled.ul`
  position: relative;
  
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
  
  &:hover .work-id {
    visibility: visible;
  }
  &:hover img {
    visibility: visible;
  }
`;

const WorkId = styled.div`
  visibility: hidden;
  position: absolute;
  left: -55px;
  top: 4px;
  font-size: 0.6em;
  line-height: 133%;
`;

const Image = styled.img.attrs(({width, height, left, top}) => ({
  style: {
    width: `${width}px`,
    height: `${height}px`,
    top: `${top}px`,
    left: `${left}px`
  }
}))`
  visibility: hidden;
  position: fixed;
  object-fit: contain;
  z-index: -1;
`;

const WorkSelectPage = props => {
  const {locale} = useIntl();
  const {urlWithoutSlash} = useExtendedRouteMatch();

  const handlers = useSwipeable({
    onSwiping: ({event: {currentTarget}, deltaY}) => {
      handleWorkListScroll({currentTarget, deltaY: -deltaY});
    }
  });

  const canHover = window.matchMedia("(any-hover: hover)").matches;

  const [workList, setWorkList, loading] = useWorkList([], canHover);

  const handleWorkListScroll = ({currentTarget: {scrollTop, scrollHeight, clientHeight}, deltaY}) => {
    const scrollBottom = scrollHeight - scrollTop - clientHeight;
    if (deltaY > 0 && scrollBottom < Math.abs(deltaY)) {
      setWorkList(workList.slice(1).concat(workList.slice(0, 1)));
    }
    if (deltaY < 0 && scrollTop < Math.abs(deltaY)) {
      setWorkList(workList.slice(-1).concat(workList.slice(0, -1)));
    }
  };

    const imageWidth = Math.round(window.innerWidth / 7);
    const imageHeight = Math.round(window.innerHeight / 4);

    if (loading) return <Loading/>;
    return (
      <Page>
        <WorkList onWheel={handleWorkListScroll} {...handlers}>
          {workList
            .filter(work => work.id && work.name && work.name[locale])
            .map(work =>
              <WorkItem disabled={!work.imageLink} key={work.id}>
                {canHover && work.imageLink &&
                <Image key={work.id}
                       width={imageWidth}
                       height={imageHeight}
                       left={getRandomInt(0, window.innerWidth - imageWidth)}
                       top={getRandomInt(0, window.innerHeight - imageHeight)}
                       src={work.imageLink}/>
                }
                <Link to={work.imageLink ? `${urlWithoutSlash}/${work.id}` : '#'}>
                  {canHover &&
                  <WorkId className="work-id">{work.id}</WorkId>
                  }
                  {work.name[locale]}
                </Link>
              </WorkItem>
            )}
        </WorkList>
      </Page>
    );
  }
;

WorkSelectPage.propTypes = {};

export default WorkSelectPage;