import React, { useEffect, useState, useCallback } from "react";
import { Input } from "../components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "../components/ui/pagination";
import { useDebounce } from "../hooks/useDebounce";
import { ItemCard } from "../components/ItemCard";
import { SkeletonCard } from "../components/SkeletonCard";
import {
  itemsContainerStyles,
  itemsTextStyles,
  searchInputStyles,
  paginationStyles,
} from "../lib/itemsStyles";
import {
  calculatePagination,
  getPaginatedItems,
  generatePaginationRange,
  formatResultsText,
} from "../lib/itemsUtils";

function Items() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 10,
    hasNextPage: false,
    hasPrevPage: false,
  });

  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const loadItems = useCallback(async (page = 1, query = "") => {
    setLoading(true);
    setError(null);

    try {
      const params = {};

      if (query.trim()) {
        params.q = query.trim();
      }

      const res = await fetch(
        `http://localhost:3001/api/items?${new URLSearchParams(params)}`
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      setItems(data || []);

      const paginationData = calculatePagination(data, page);
      setPagination(paginationData);
    } catch (err) {
      setError(err.message);
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadItems(1, debouncedSearchQuery);
  }, [debouncedSearchQuery, loadItems]);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearchQuery]);

  useEffect(() => {
    if (items.length > 0) {
      const paginationData = calculatePagination(items, currentPage);
      setPagination(paginationData);
    }
  }, [currentPage, items.length]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPaginationItems = () => {
    const { currentPage: current, totalPages } = pagination || {};
    const range = generatePaginationRange(current, totalPages);

    return range.map((item, index) => {
      if (typeof item === "string" && item.includes("ellipsis")) {
        return (
          <PaginationItem key={item}>
            <PaginationEllipsis style={paginationStyles.ellipsis} />
          </PaginationItem>
        );
      }

      const isActive = current === item;
      return (
        <PaginationItem key={item}>
          <PaginationLink
            onClick={() => handlePageChange(item)}
            isActive={isActive}
            style={{
              ...paginationStyles.item,
              ...(isActive
                ? paginationStyles.active
                : paginationStyles.inactive),
            }}
          >
            {item}
          </PaginationLink>
        </PaginationItem>
      );
    });
  };

  if (loading && !items?.length) {
    return (
      <div style={itemsContainerStyles.main}>
        {Array.from({ length: 10 }).map((_, idx) => (
          <SkeletonCard key={idx} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div style={itemsContainerStyles.main}>
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <p style={itemsTextStyles.errorText}>Error: {error}</p>
        </div>
      </div>
    );
  }

  const resultsText = formatResultsText(
    currentPage,
    pagination?.totalItems || items?.length || 0,
    10,
    searchQuery
  );

  return (
    <div style={itemsContainerStyles.main}>
      <div style={itemsContainerStyles.header}>
        <h1 style={itemsTextStyles.title}>Items Collection</h1>
        <p style={itemsTextStyles.subtitle}>
          Search and browse through our items
        </p>
      </div>

      <div style={itemsContainerStyles.searchContainer}>
        <div style={itemsContainerStyles.searchWrapper}>
          <Input
            type="text"
            placeholder="Search items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={searchInputStyles}
          />
        </div>
      </div>

      {!loading && (
        <div style={itemsContainerStyles.resultsInfo}>
          <p>
            {resultsText.main}
            {resultsText.search && (
              <span style={itemsTextStyles.accentText}>
                {resultsText.search}
              </span>
            )}
          </p>
        </div>
      )}

      {items?.length > 0 ? (
        <div style={itemsContainerStyles.itemsList}>
          {getPaginatedItems(items, currentPage).map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        !loading && (
          <div style={itemsContainerStyles.noItemsContainer}>
            <div style={itemsContainerStyles.noItemsContent}>
              <p style={itemsTextStyles.noItemsTitle}>No items found</p>
              <p style={itemsTextStyles.noItemsSubtitle}>
                Try adjusting your search terms
              </p>
            </div>
          </div>
        )
      )}

      {pagination?.totalPages > 1 && (
        <div style={itemsContainerStyles.paginationContainer}>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(currentPage - 1)}
                  style={{
                    ...paginationStyles.navigation,
                    ...(!pagination?.hasPrevPage && paginationStyles.disabled),
                    cursor: pagination?.hasPrevPage ? "pointer" : "not-allowed",
                  }}
                />
              </PaginationItem>

              {renderPaginationItems()}

              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(currentPage + 1)}
                  style={{
                    ...paginationStyles.navigation,
                    ...(!pagination?.hasNextPage && paginationStyles.disabled),
                    cursor: pagination?.hasNextPage ? "pointer" : "not-allowed",
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}

      {loading && items?.length > 0 && (
        <div style={itemsContainerStyles.loadingOverlay}>
          <div style={itemsContainerStyles.loadingCard}>
            <p style={itemsTextStyles.loadingText}>Loading...</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Items;
