import React, {useEffect, useRef, useState} from 'react';
import {FormattedMessage, useIntl} from 'react-intl';
import styled, {css} from 'styled-components';
import HorizontalScroll from '../../components/HorizontalScroll';
import useWorkList from '../../hooks/useWorkList';
import usePageDescriptions from '../../hooks/usePageDescriptions';
import {getProps, renderPage} from '../../utils/pageDescription';
import useResize from '../../hooks/useResize';
import useIsMini from '../../hooks/useIsMini';
import WorkDescription from '../../components/work/WorkDescription';
import {Blinking, StandardTopBottomMargin} from '../../ReuseStyles';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const WorkPageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
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
  position: absolute;
  bottom: 130px;
  left: ${({theme}) => -theme.app.leftMargin - theme.menu.maxItemWidth}px;
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
  bottom: 30px;
`;

const WorkPage = ({id}) => {
  const intl = useIntl();
  const {locale} = intl;

  const containerRef = useRef(null);
  const {width} = useResize(containerRef);
  const mini = useIsMini(width);

  const [workList] = useWorkList([]);

  const [work, setWork] = useState({});
  const [prevWork, setPrevWork] = useState({});
  const [nextWork, setNextWork] = useState({});
  useEffect(() => {
    const workIndex = workList.findIndex(w => w.id === id);
    if (workIndex > -1) {
      setWork(workList[workIndex]);
      workIndex - 1 > -1 && setPrevWork(workList[workIndex - 1]);
      workIndex + 1 < workList.length && setNextWork(workList[workIndex + 1]);
    }
  }, [workList, id]);

  const pageDescriptions = usePageDescriptions(`/data/work/${id}`);

  const PrevWorkComponent =
    <PrevWorkContainer>
      <FormattedMessage id="works.prev"/>
      <a href={`/${locale}/work/${prevWork.id}`}>
        <FormattedMessage id="menu.work"/>
        {prevWork.name && prevWork.name[locale] ?
          prevWork.name[locale] :
          prevWork.id
        }
      </a>
    </PrevWorkContainer>;

  const NextWorkComponent =
    <NextWorkContainer>
      <FormattedMessage id="works.next"/>
      <a href={`/${locale}/work/${nextWork.id}`}>
        {nextWork.name && nextWork.name[locale] ?
          nextWork.name[locale] :
          nextWork.id
        }
      </a>
    </NextWorkContainer>;

  const pages = pageDescriptions.map((desc, i) =>
    <WorkPageContainer {...getProps(desc)} key={i}>
      {!mini && <OnPageWorkDescription work={work}/>}
      {!mini && i === pageDescriptions.length - 1 && prevWork && prevWork.id &&
      PrevWorkComponent
      }
      {!mini && i === pageDescriptions.length - 1 && nextWork && nextWork.id &&
      NextWorkComponent
      }
      {renderPage(desc, i)}
    </WorkPageContainer>
  );
  if (mini) {
    pages.unshift(
      <WorkDescriptionPageContainer key='description'>
        <WorkDescription work={work}/>
      </WorkDescriptionPageContainer>
    );
    pages.push(
      <PrevNextPageContainer key='prevnext'>
        {prevWork && prevWork.id &&
        PrevWorkComponent
        }
        {nextWork && nextWork.id &&
        NextWorkComponent
        }
      </PrevNextPageContainer>
    );
  }

  return (
    <Container ref={containerRef}>
      <HorizontalScroll>
        {pages}
      </HorizontalScroll>
    </Container>
  );
};

export default WorkPage;