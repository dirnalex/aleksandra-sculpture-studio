import React from 'react';
import {getRandomInt} from '../../utils/random';
import {Link} from 'react-router-dom';
import useExtendedRouteMatch from '../../hooks/useExtendedRouteMatch';
import {useIntl} from 'react-intl';
import useWorkList from '../../hooks/useWorkList';
import Loading from '../../components/Loading';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import {Image, Page, WorkId, WorkItem, WorkList} from './WorkSelectPageStyles';

const WorkSelectPage = () => {
    const {locale} = useIntl();
    const {urlWithoutSlash} = useExtendedRouteMatch();

    const canHover = window.matchMedia("(any-hover: hover)").matches;

    const {workList, loading} = useWorkList([], canHover);

    const showableWorkList = workList.filter(work => work.id && work.name && work.name[locale]);

    const {scrollerRef, stopAutoScrollRef} = useInfiniteScroll();

    const handleItemHover = () => {
      stopAutoScrollRef.current = true;
    };

    const handleItemUnHover = () => {
      stopAutoScrollRef.current = false;
    };

    const imageWidth = Math.round(window.innerWidth / 7);
    const imageHeight = Math.round(window.innerHeight / 4);

    const renderWorkList = isCopy => {
      return showableWorkList.map(work =>
        <WorkItem onMouseEnter={handleItemHover}
                  onMouseLeave={handleItemUnHover}
                  className={isCopy && 'copy'}
                  disabled={!work.imageLink}
                  key={isCopy ? (work.id + 'copy') : work.id}>
          {canHover && work.imageLink &&
          <Image width={imageWidth}
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
      );
    };

    if (loading) return <Loading/>;
    return (
      <Page>
        <WorkList ref={scrollerRef}>
          <div className="mainContent">
            {renderWorkList()}
          </div>
          {renderWorkList(true)}
        </WorkList>
      </Page>
    );
  }
;

WorkSelectPage.propTypes = {};

export default WorkSelectPage;