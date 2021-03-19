import {useCallback, useRef} from 'react';

export default () => {
  const stopAutoScrollRef = useRef(false);

  const scrollerRef = useCallback(scrollerEl => {
    let handleWorkListScroll;
    if (scrollerEl) {
      const mainContentEl = scrollerEl.querySelector('.mainContent');
      if (mainContentEl && mainContentEl.clientHeight) {
        const mainContentHeight = mainContentEl.clientHeight;
        scrollerEl.style.height = mainContentHeight + "px";
        let stopScroll = false;
        handleWorkListScroll = ({currentTarget}) => {
          if (!stopScroll) {
            requestAnimationFrame(() => {
              const {scrollTop} = currentTarget;
              if (scrollTop >= mainContentHeight) {
                currentTarget.scrollTop = 1;
                stopScroll = true;
              }
              if (scrollTop <= 0) {
                currentTarget.scrollTop = mainContentHeight;
                stopScroll = true;
              }
              if (stopScroll) {
                setTimeout(() => {
                  stopScroll = false;
                }, 50);
              }
            });
          }
        };

        scrollerEl.scrollTop = 1;

        scrollerEl.addEventListener('scroll', handleWorkListScroll);

        let start = Date.now();
        const delay = 150;

        function scrollOneDown() {
          if (Date.now() - start > delay) {
            start += delay;
            if (!stopAutoScrollRef.current) {
              scrollerEl.scrollTop += 1;
            }
          }
          requestAnimationFrame(scrollOneDown);
        }

        requestAnimationFrame(scrollOneDown);
      }
    }
    return () => {
      if (scrollerEl) {
        scrollerEl.removeEventListener('scroll', handleWorkListScroll);
      }
    };
  }, []);

  return {stopAutoScrollRef, scrollerRef};
}