import { fetchItems } from "./api";

export const calculatePagination = (items, currentPage, itemsPerPage = 10) => {
  const totalItems = items?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return {
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
  };
};

export const getPaginatedItems = (items, currentPage, itemsPerPage = 10) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return items.slice(startIndex, endIndex);
};

export const createFetchItemsFunction = () => {
  return async (page = 1, query = "") => {
    const params = {};

    if (query.trim()) {
      params.q = query.trim();
    }

    const data = await fetchItems(params);
    return data || [];
  };
};

export const generatePaginationRange = (currentPage, totalPages) => {
  const range = [];

  if (totalPages > 0) {
    range.push(1);
  }

  if (currentPage > 3) {
    range.push("ellipsis-start");
  }

  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);

  for (let page = start; page <= end; page++) {
    range.push(page);
  }

  if (currentPage < totalPages - 2) {
    range.push("ellipsis-end");
  }

  if (totalPages > 1) {
    range.push(totalPages);
  }

  return range;
};

export const formatResultsText = (
  currentPage,
  totalItems,
  itemsPerPage,
  searchQuery
) => {
  if (totalItems === 0) {
    return {
      main: "No items found",
      search: searchQuery ? ` for "${searchQuery}"` : "",
    };
  }

  const startItem = Math.min((currentPage - 1) * itemsPerPage + 1, totalItems);
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return {
    main: `Showing ${startItem}-${endItem} of ${totalItems} items`,
    search: searchQuery ? ` for "${searchQuery}"` : "",
  };
};

export const hoverEffects = {
  itemName: {
    enter: (element, colors) => {
      element.style.color = colors.accent;
    },
    leave: (element, colors) => {
      element.style.color = colors.text;
    },
  },

  chevron: {
    enter: (element, colors) => {
      element.style.color = colors.accentHover;
      element.style.transform = "translateX(4px)";
    },
    leave: (element, colors) => {
      element.style.color = colors.accent;
      element.style.transform = "translateX(0)";
    },
  },

  card: {
    enter: (element, colors) => {
      element.style.boxShadow = colors.cardShadowHover;
      element.style.transform = "translateY(-2px)";
    },
    leave: (element, colors) => {
      element.style.boxShadow = colors.cardShadow;
      element.style.transform = "translateY(0)";
    },
  },
};
