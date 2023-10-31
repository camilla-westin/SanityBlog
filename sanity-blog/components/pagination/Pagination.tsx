import { PaginationTypes } from "@/types/paginationTypes";

const Pagination: React.FC<PaginationTypes> = ({ totalCount, limit, currentPage, basePath, onPageChange }) => {
    const totalPages = Math.ceil(totalCount / limit);

    return (
        <div>
            {currentPage > 1 && (
                <a onClick={() => onPageChange(currentPage - 1)} className="px-2 cursor-pointer">Previous</a>
            )}

            {Array.from({ length: totalPages }).map((_, index) => {
                const pageNum = index + 1;
                return (
                    <a key={pageNum} onClick={() => onPageChange(pageNum)} className={pageNum === currentPage ? 'underline font-bold px-2' : 'cursor-pointer'}>
                        {pageNum}
                    </a>
                );
            })}

            {currentPage < totalPages && (
                <a onClick={() => onPageChange(currentPage + 1)} className="px-2 cursor-pointer">Next</a>
            )}
        </div>
    );
};

export default Pagination