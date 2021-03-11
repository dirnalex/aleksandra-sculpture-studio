import {useEffect, useState} from 'react';
import {getComponentName, getProps} from '../utils/pageDescription';
import loadImage from '../utils/loadImage';

export default (urlBase) => {
  const [pageDescriptions, setPageDescriptions] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function getPages() {
      setLoading(true);
      let emptyPage = false;
      const loadedPageDescriptions = [];
      for (let pageNo = 1; !emptyPage; pageNo++) {
        const response = await fetch(`${urlBase}/${pageNo}.json`);
        if (response.status === 200) {
          try {
            const json = await response.json();
            if (['ImagePage', 'FullscreenImagePage'].includes(getComponentName(json))) {
              await loadImage(getProps(json).imageLink);
            }
            loadedPageDescriptions.push(json);
          } catch (e) {
            emptyPage = true;
          }
        } else {
          emptyPage = true;
        }
      }
      setPageDescriptions(loadedPageDescriptions);
      setLoading(false);
    })();
  }, [urlBase]);

  return [pageDescriptions, loading];
};