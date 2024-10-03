export type LessonRequestOptions = {
    limit?: number;
    page: number;
};

export type Lesson = {
    body?: string;
    id: number;
    title: string;
    updatedAt: number;
};

export interface ApiLessonData {
    content: {
        ar: {
            body: string;
            title: string;
            updatedAt: number;
        };
    };
    id: number;
}

type Pagination = {
    currentPage: number;
    limit: number;
    nextPageUrl?: string;
    previousPageUrl?: string;
    total: number;
};

export type LessonResults = {
    lessons: Lesson[];
    pagination: Pagination;
};

export type ApiResponse = {
    currentPage: number;
    data?: ApiLessonData[];
    limit: number;
    nextPageUrl: string;
    previousPageUrl?: string;
    total: number;
};
