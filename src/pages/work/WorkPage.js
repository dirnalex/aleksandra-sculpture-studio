import React, {useEffect, useState} from 'react';
import {useIntl} from 'react-intl';
import styled, {css} from 'styled-components';
import HorizontalScroll from '../../components/HorizontalScroll';
import useWorkList from '../../hooks/useWorkList';
import usePageDescriptions from '../../hooks/usePageDescriptions';
import {getProps, renderPage} from '../../utils/pageDescription';
import useWindowResize from '../../hooks/useWindowResize';
import useIsMini from '../../hooks/useIsMini';
import WorkDescription from '../../components/work/WorkDescription';
import {Blinking, HideScrollbar, StandardTopBottomMargin} from '../../ReuseStyles';
import PrevNextWorkLink from '../../components/work/PrevNextWorkLink';
import {Redirect} from 'react-router-dom';
import Loading from '../../components/Loading';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const WorkPageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  justify-content: center;
  margin-top: 0;
  margin-bottom: 0;
  & > * {
    flex: auto 1 1;
  }
`;

const WorkDescriptionPageContainer = styled.div`
  ${StandardTopBottomMargin};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OnPageWorkDescription = styled(WorkDescription)`
  position: fixed;
  color: ${props => props.theme.textColor || 'black'};
  z-index: 999;
  bottom: ${({theme}) => theme.app.bottomMargin * 2 + theme.menu.itemHeight}px;
  top: calc(60% + ${({theme}) => theme.scroller.arrow.height + 10}px);
  left: ${({theme}) => theme.app.leftMargin}px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${HideScrollbar}
`;

const PrevNextPageContainer = styled.div`
  ${StandardTopBottomMargin};
  position: relative;
`;

const PrevNextWorkContainer = css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  color: ${props => props.theme.textColor || 'black'};
  font-size: 0.75em;
  line-height: 117%;
  
  & a {
    ${Blinking()};
    :hover {
      animation: none;
      color: ${({theme}) => theme.app.emphasisedTextColor};
    }
  }
`;

const PrevWorkContainer = styled.div`
  ${PrevNextWorkContainer};
  top: 40px;
`;

const NextWorkContainer = styled.div`
  ${PrevNextWorkContainer};
  bottom: 50px;
`;

const WorkPage = ({id}) => {
  const {locale} = useIntl();

  const {windowWidth} = useWindowResize();
  const mini = useIsMini(windowWidth);

  const {workList} = useWorkList([]);

  const [work, setWork] = useState({});
  const [prevWork, setPrevWork] = useState({});
  const [nextWork, setNextWork] = useState({});
  useEffect(() => {
    const existingWorkList = workList.filter(work => !!work.imageLink)
    const workIndex = existingWorkList.findIndex(w => w.id === id);
    if (workIndex > -1) {
      setWork(existingWorkList[workIndex]);
      workIndex - 1 > -1 ? setPrevWork(existingWorkList[workIndex - 1]) : setPrevWork(existingWorkList[existingWorkList.length - 1]);
      workIndex + 1 < existingWorkList.length ? setNextWork(existingWorkList[workIndex + 1]) : setNextWork(existingWorkList[0]);
    }
  }, [workList, id]);

  const [pageDescriptions, loading] = usePageDescriptions(`/data/work/${id}`);

  const [pages, setPages] = useState([]);
  useEffect(() => {
    if (!Array.isArray(pageDescriptions)) return;
    const newPages = pageDescriptions.map((desc, i) =>
      <WorkPageContainer {...getProps(desc)} key={i}>
        {!mini && i === pageDescriptions.length - 1 && prevWork && prevWork.id &&
        <PrevWorkContainer>
          <PrevNextWorkLink labelId="work.prev" work={prevWork}/>
        </PrevWorkContainer>
        }
        {!mini && i === pageDescriptions.length - 1 && nextWork && nextWork.id &&
        <NextWorkContainer>
          <PrevNextWorkLink labelId="work.next" work={nextWork}/>
        </NextWorkContainer>
        }
        {renderPage(desc, i)}
      </WorkPageContainer>
    );

    if (mini) {
      newPages.unshift(
        <WorkDescriptionPageContainer key='description'>
          <WorkDescription work={work}/>
        </WorkDescriptionPageContainer>
      );
      newPages.push(
        <PrevNextPageContainer key='prevnext'>
          {prevWork && prevWork.id &&
          <PrevWorkContainer>
            <PrevNextWorkLink labelId="work.prev" work={prevWork}/>
          </PrevWorkContainer>
          }
          {nextWork && nextWork.id &&
          <NextWorkContainer>
            <PrevNextWorkLink labelId="work.next" work={nextWork}/>
          </NextWorkContainer>
          }
        </PrevNextPageContainer>
      );
    }
    setPages(newPages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageDescriptions, work, mini]);

  if (loading) return <Loading/>;
  if (!Array.isArray(pageDescriptions)) return null;
  if (pageDescriptions.length === 0) return <Redirect to={`/${locale}/work`}/>;
  return (
    <Container>
      {!mini && <OnPageWorkDescription work={work}/>}
      <HorizontalScroll>
        {pages}
      </HorizontalScroll>
    </Container>
  );
};

export default WorkPage;