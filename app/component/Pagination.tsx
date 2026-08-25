import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  basePath: string;
};

function buildHref(basePath: string, page: number) {
  return page <= 1 ? basePath : `${basePath}?page=${page}`;
}

// Builds a page-number list with ellipses, e.g. [1, "...", 4, 5, 6, "...", 12]
function getPageRange(current: number, total: number): (number | "...")[] {
  const range: (number | "...")[] = [];
  const delta = 1;

  const left = Math.max(2, current - delta);
  const right = Math.min(total - 1, current + delta);

  range.push(1);
  if (left > 2) range.push("...");
  for (let i = left; i <= right; i++) range.push(i);
  if (right < total - 1) range.push("...");
  if (total > 1) range.push(total);

  return range;
}

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
}: PaginationProps) {
  const pages = getPageRange(currentPage, totalPages);

  return (
    <nav
      aria-label="Blog pagination"
      className="mt-14 flex items-center justify-center gap-1.5"
    >
      {/* Previous */}
      {currentPage > 1 ? (
        <Link
          href={buildHref(basePath, currentPage - 1)}
          rel="prev"
          aria-label="Previous page"
          className="flex h-9 items-center rounded-lg border border-[#0b2b55]/15 bg-white px-3 text-sm font-medium text-[#0b2b55] transition hover:border-blue-400 hover:text-blue-600"
        >
          ‹ Prev
        </Link>
      ) : (
        <span
          aria-disabled="true"
          className="flex h-9 items-center rounded-lg border border-[#0b2b55]/10 px-3 text-sm font-medium text-[#0b2b55]/30"
        >
          ‹ Prev
        </span>
      )}

      {/* Page numbers */}
      <ul className="flex items-center gap-1.5">
        {pages.map((page, idx) =>
          page === "..." ? (
            <li
              key={`ellipsis-${idx}`}
              className="flex h-9 w-9 items-center justify-center text-sm text-[#0b2b55]/40"
            >
              …
            </li>
          ) : (
            <li key={page}>
              <Link
                href={buildHref(basePath, page)}
                aria-current={page === currentPage ? "page" : undefined}
                className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition ${
                  page === currentPage
                    ? "bg-blue-600 text-white"
                    : "border border-[#0b2b55]/15 bg-white text-[#0b2b55] hover:border-blue-400 hover:text-blue-600"
                }`}
              >
                {page}
              </Link>
            </li>
          )
        )}
      </ul>

      {/* Next */}
      {currentPage < totalPages ? (
        <Link
          href={buildHref(basePath, currentPage + 1)}
          rel="next"
          aria-label="Next page"
          className="flex h-9 items-center rounded-lg border border-[#0b2b55]/15 bg-white px-3 text-sm font-medium text-[#0b2b55] transition hover:border-blue-400 hover:text-blue-600"
        >
          Next ›
        </Link>
      ) : (
        <span
          aria-disabled="true"
          className="flex h-9 items-center rounded-lg border border-[#0b2b55]/10 px-3 text-sm font-medium text-[#0b2b55]/30"
        >
          Next ›
        </span>
      )}
    </nav>
  );
}