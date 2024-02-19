const slicePaginationData = <T>(
  data: any[],
  pageNumber: number,
  maxPage: number,
  elementPerPage: number
): T[] => {
  if (!Array.isArray(data)) return [];
  else {
    if (pageNumber <= maxPage && pageNumber > 0) {
      return data.slice(
        elementPerPage * (pageNumber - 1),
        elementPerPage * (pageNumber - 1) + elementPerPage
      );
    } else {
      return [];
    }
  }
};
const isDisablePrev = ({ currentPage }: { currentPage: number }): boolean => {
  return currentPage - 1 < 1;
};
const isDisableNext = ({
  currentPage,
  maxPage,
}: {
  currentPage: number;
  maxPage: number;
}): boolean => {
  return currentPage + 1 > maxPage;
};
const handlePrevPage = (
  { currentPage, maxPage }: { currentPage: number; maxPage: number },
  paginateCallback: Function
): void => {
  if (!isDisablePrev({ currentPage })) {
    paginateCallback({
      currentPage: currentPage - 1,
      maxPage,
    });
  }
};
const handleNextPage = (
  { currentPage, maxPage }: { currentPage: number; maxPage: number },
  paginateCallback: Function
): void => {
  if (!isDisableNext({ currentPage, maxPage })) {
    paginateCallback({
      currentPage: currentPage + 1,
      maxPage,
    });
  }
};
const calculateFromIndex = (
  dataLength: number,
  currentPage: number,
  elementPerPage: number
): number => {
  if (!currentPage || dataLength === 0) return 0;
  return (currentPage - 1) * elementPerPage + 1;
};

const calculateToIndex = (
  dataLength: number,
  currentPage: number,
  elementPerPage: number
): number | null => {
  if (!currentPage || !dataLength) return 0;
  const testMaxElement =
    (currentPage - 1) * elementPerPage + elementPerPage - 1;
  if (dataLength < testMaxElement) {
    return dataLength;
  } else {
    return testMaxElement + 1;
  }
};

const calculateNumberList = (
  pageNumber: number,
  maxPage: number
): { page: number; active: boolean }[] => {
  const displayPages: { page: number; active: boolean }[] = [];

  if (pageNumber === 1) {
    for (let i = 0; i < 3 && pageNumber + i <= maxPage; i++) {
      displayPages.push({
        page: pageNumber + i,
        active: i === 0 ? true : false,
      });
    }
  } else if (pageNumber < maxPage) {
    displayPages.push(
      { page: pageNumber - 1, active: false },
      { page: pageNumber, active: true },
      { page: pageNumber + 1, active: false }
    );
  } else if (pageNumber === maxPage) {
    for (
      let i = pageNumber > 2 ? 2 : pageNumber - 1;
      i >= 0 && pageNumber - i >= 1;
      i--
    ) {
      displayPages.push({
        page: pageNumber - i,
        active: i === 0 ? true : false,
      });
    }
  }

  return displayPages;
};

const defaultStartPage = 1;
const calculateMaxPage = (data: any[], maxElementPerPage: number): number => {
  return data ? Math.ceil(data.length / maxElementPerPage) : defaultStartPage;
};

export {
  slicePaginationData,
  isDisablePrev,
  isDisableNext,
  handlePrevPage,
  handleNextPage,
  calculateFromIndex,
  calculateToIndex,
  calculateNumberList,
  calculateMaxPage,
};
