import {useEffect, useState} from 'react';
import loadImage from '../utils/loadImage';

const useWorkList = (initWorkList = [], preloadImages) => {
  const [workList, setWorkList] = useState(initWorkList);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function getPages() {
      setLoading(true);
      const response = await fetch(`/data/work/list.json`);
      if (response.ok) {
        try {
          const json = await response.json();
          if (Array.isArray(json)) {
            if (preloadImages) {
              for (let work of json.filter(work => work.imageLink)) {
                await loadImage(work.imageLink);
              }
            }
            setWorkList(json);
          }
        } catch (e) {
        }
      }
      setLoading(false);
    })();
  }, [preloadImages]);

  return {workList, setWorkList, loading};
};

export default useWorkList;
