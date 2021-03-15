import {useEffect, useState} from 'react';
import usePrevious from './usePrevious';

const getSafePage = (page, size) => {
  const numericPage = Number(page);
  let safePage = 0;
  if (Number.isInteger(numericPage) && numericPage >= 0 && numericPage < size) {
    safePage = numericPage;
  }
  return safePage;
};

export default (pageFromOutside = 0, size = 0) => {
  const [page, setPage] = useState(getSafePage(pageFromOutside, size));
  const prevPage = usePrevious(page);

  useEffect(() => {
    const safePageFromOutside = getSafePage(pageFromOutside, size);
    if (safePageFromOutside !== page) {
      setPage(safePageFromOutside);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageFromOutside, size]);

  const safeSetPage = (pageToSet) => {
    const safePageToSet = getSafePage(pageToSet, size);
    setPage(safePageToSet);
  };

  const incrementPage = () => {
    if (page < size - 1) {
      setPage(page + 1);
    }
  };

  const decrementPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const isFirstPage = page === 0;
  const isLastPage = page === size - 1;

  return {page, prevPage, setPage: safeSetPage, incrementPage, decrementPage, isFirstPage, isLastPage}
}