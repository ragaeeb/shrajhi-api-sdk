import wretch from 'wretch';
import QueryStringAddon from 'wretch/addons/queryString';

import { ApiResponse } from '../types';

const w = wretch('https://api.shrajhi.com.sa').addon(QueryStringAddon);

export const doGet = async (path: string, queryParams: Record<string, any>): Promise<ApiResponse> => {
    const responseData = (await w.url(path).query(queryParams).get().json()) as ApiResponse;

    return responseData;
};
