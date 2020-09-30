import {useState} from 'react';

const getSafePage = (page, size) => {
  const numericPage = parseInt(page);
  let safePage = 0;
  let feltBack = true;
  if (Number.isInteger(numericPage) && numericPage >= 0 && numericPage < size) {
    safePage = numericPage;
    feltBack = false;
  }
  return {safePage, feltBack};
};

export default (initialPage, size, onPageChange) => {
  console.log(`Init with initialPage = ${initialPage}, size = ${size}, onPageChange = ${onPageChange}`);
  const {safePage: safeInitialPage, feltBack} = getSafePage(initialPage, size);
  if (feltBack) {
    console.log("Init fallback");
    onPageChange(safeInitialPage);
  }
  const [page, setPage] = useState(safeInitialPage);

  const safeSetPage = (page) => {
    const {safePage: pageToGo} = getSafePage(page, size);
    setPage(pageToGo);
    console.log("Set page");
    onPageChange(pageToGo);
  };

  const incrementPage = () => {
    console.log("Increment");
    if (page < size - 1) {
      safeSetPage(page + 1);
    }
  };

  const decrementPage = () => {
    console.log("Decrement");
    if (page > 0) {
      safeSetPage(page - 1);
    }
  };

  const isFirstPage = page === 0;
  const isLastPage = page === size - 1;

  return {page, setPage: safeSetPage, incrementPage, decrementPage, isFirstPage, isLastPage}
}