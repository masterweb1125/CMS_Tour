// Client_Paginator.tsx
import React from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { PaginatorProps } from "@/src/types/client/paginator.types";

const Client_Paginator = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginatorProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const safeTotalPages = Math.min(totalPages, 1000); // Adjust the limit as needed

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const firstThreePages = [1, 2, 3];
    const lastThreePages = Array.from(
      { length: Math.min(safeTotalPages, 3) },
      (_, index) => safeTotalPages - index
    ).reverse();

    return [
      ...firstThreePages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => handlePageClick(page)}
          className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 ${
            currentPage === page ? "bg-gray-50" : "hover:bg-gray-50"
          } focus:z-20 focus:outline-offset-0`}
        >
          {page}
        </button>
      )),
      safeTotalPages > 3 && (
        <>
          <span
            key="ellipsis"
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
          >
            ...
          </span>
          {lastThreePages.map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => handlePageClick(page)}
              className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 ${
                currentPage === page ? "bg-gray-50" : "hover:bg-gray-50"
              } focus:z-20 focus:outline-offset-0`}
            >
              {page}
            </button>
          ))}
        </>
      ),
    ];
  };

  return (
    <div className="flex justify-center">
      <nav
        className="isolate inline-flex -space-x-px rounded-md shadow-sm justify-center"
        aria-label="Pagination"
      >
        <button
          type="button"
          onClick={() => handlePageClick(currentPage - 1)}
          className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-50"
          } focus:z-20 focus:outline-offset-0`}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          <span className="">Previous</span>
        </button>

        {renderPageNumbers()}

        <button
          type="button"
          onClick={() => handlePageClick(currentPage + 1)}
          className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 ${
            currentPage === safeTotalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-50"
          } focus:z-20 focus:outline-offset-0`}
          disabled={currentPage === safeTotalPages}
        >
          <span className="">Next</span>
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </nav>
    </div>
  );
};

export default Client_Paginator;
