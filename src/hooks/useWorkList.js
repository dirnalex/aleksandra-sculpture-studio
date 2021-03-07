import {useEffect, useState} from 'react';

const useWorkList = (initWorkList = []) => {
  const [workList, setWorkList] = useState(initWorkList);

  useEffect(() => {
    (async function getPages() {
      const response = await fetch(`/data/work/list.json`);
      if (response.ok) {
        try {
          const json = await response.json();
          if (Array.isArray(json)) {
            setWorkList(json);
          }
        } catch (e) {
        }
      }
    })();
  }, []);

  return [workList, setWorkList];
};

export default useWorkList;
