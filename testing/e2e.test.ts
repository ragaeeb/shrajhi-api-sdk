import { describe, expect, it } from 'vitest';

import { getLessons } from '../src/index';

describe('e2e', () => {
    describe('getLessons', () => {
        it(
            'should get the lessons',
            async () => {
                const data = await getLessons({ limit: 2, page: 1 });
                expect(data).toEqual({
                    lessons: [
                        { id: expect.any(Number), title: expect.any(String), updatedAt: expect.any(Number) },
                        { id: expect.any(Number), title: expect.any(String), updatedAt: expect.any(Number) },
                    ],
                    pagination: {
                        currentPage: 1,
                        limit: 2,
                        nextPageUrl: expect.any(String),
                        total: expect.any(Number),
                    },
                });
            },
            { timeout: 5000 },
        );
    });
});
