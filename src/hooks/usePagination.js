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

const noop = () => {
};

export default (pageFromOutside = 0, size = 0, onPageChange = noop) => {
  const [page, setPage] = useState(getSafePage(pageFromOutside, size));
  const prevPage = usePrevious(page);

  useEffect(() => {
    console.debug(`Page from outside (${pageFromOutside}) or size (${size}) changed`);
    const safePageFromOutside = getSafePage(pageFromOutside, size);
    console.debug(`Safe page from outside is ${safePageFromOutside}`);
    if (safePageFromOutside !== page) {
      console.debug(`Safe page from outside (${safePageFromOutside}) differs from current. Changing page.`);
      setPage(safePageFromOutside);
    }
  }, [pageFromOutside, size]);

  useEffect(() => {
    console.debug(`Page changed to ${page}`);
    onPageChange(page, prevPage);
  }, [page]);

  const safeSetPage = (pageToSet) => {
    console.debug(`Safe setting the page ${pageToSet}`);
    const safePageToSet = getSafePage(pageToSet, size);
    console.debug(`Safe page is ${safePageToSet}`);
    setPage(safePageToSet);
  };

  const incrementPage = () => {
    console.debug(`Trying to increment page ${page}`);
    if (page < size - 1) {
      console.debug(`Incrementing page ${page}`);
      setPage(page + 1);
    }
  };

  const decrementPage = () => {
    console.debug(`Trying to decrement page ${page}`);
    if (page > 0) {
      console.debug(`Decrementing page ${page}`);
      setPage(page - 1);
    }
  };

  const isFirstPage = page === 0;
  const isLastPage = page === size - 1;

  return {page, prevPage, setPage: safeSetPage, incrementPage, decrementPage, isFirstPage, isLastPage}
}