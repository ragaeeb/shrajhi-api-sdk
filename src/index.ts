import { load } from 'cheerio';

import { ApiLessonData, Lesson, LessonRequestOptions, LessonResults } from './types';
import { doGet } from './utils/network';

export const getLessons = async (options: LessonRequestOptions): Promise<LessonResults> => {
    const responseData = await doGet(`/api/v2/posts/lesson`, {
        ...(options.limit && { limit: options.limit }),
        page: options.page,
    });

    const parsedContents: ApiLessonData[] = responseData.data as ApiLessonData[];
    const lessons: Lesson[] = parsedContents
        .map(
            ({
                content: {
                    ar: { body, title, updatedAt },
                },
                id,
            }) => {
                return {
                    ...(body && { body: load(body).text().trim() }),
                    id,
                    title,
                    updatedAt,
                };
            },
        )
        .reverse();

    return {
        lessons,
        pagination: {
            currentPage: responseData.currentPage,
            limit: responseData.limit,
            ...(responseData.nextPageUrl && { nextPageUrl: responseData.nextPageUrl }),
            ...(responseData.previousPageUrl && { previousPageUrl: responseData.previousPageUrl }),
            total: responseData.total,
        },
    };
};
