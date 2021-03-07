import {useEffect, useState} from 'react';

export default (urlBase) => {
  const [pageDescriptions, setPageDescriptions] = useState([]);

  useEffect(() => {
    (async function getPages() {
      let emptyPage = false;
      const loadedPageDescriptions = [];
      for (let pageNo = 1; !emptyPage; pageNo++) {
        const response = await fetch(`${urlBase}/${pageNo}.json`);
        if (response.ok) {
          try {
            const json = await response.json();
            loadedPageDescriptions.push(json);
          } catch (e) {
            emptyPage = true;
          }
        } else {
          emptyPage = true;
        }
      }
      setPageDescriptions(loadedPageDescriptions);
    })();
  }, [urlBase]);

  return pageDescriptions;
};