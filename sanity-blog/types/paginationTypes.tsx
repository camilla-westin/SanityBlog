export type PaginationTypes = {
    totalCount: number;
    limit: number;
    currentPage: number;
    basePath: string;
    onPageChange: (page: number) => void;
}