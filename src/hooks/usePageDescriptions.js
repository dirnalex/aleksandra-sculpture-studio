import {useEffect, useState} from 'react';

export default (urlBase) => {
  const [pageDescriptions, setPageDescriptions] = useState({loaded: false, loadedPageDescriptions: []});

  useEffect(() => {
    (async function getPages() {
      let emptyPage = false;
      const loadedPageDescriptions = [];
      for (let pageNo = 1; !emptyPage; pageNo++) {
        const response = await fetch(`${urlBase}/${pageNo}.json`);
        if (response.status === 200) {
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
      setPageDescriptions({loaded: true, loadedPageDescriptions});
    })();
  }, [urlBase]);

  return pageDescriptions;
};