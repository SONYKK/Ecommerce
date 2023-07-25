import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import { CatalogItem } from 'entities/CatalogItem/model/types/CatalogItemSchema';
import {
    getCatalogPageIsLoading,
    getCatalogPageError,
    getCatalogPageView,
    getCatalogPageNum,
    getCatalogPageLimit,
    getCatalogPageHasMore,
    getCatalogPageInited,
    getCatalogPageOrder,
    getCatalogPageSort,
    getCatalogPageSearch,
    getCatalogPageType,
} from '../selectors/catalogPageSelectors';

export const fetchCatalogPage = createAsyncThunk<
    CatalogItem[],
    string,
    ThunkConfig<string>
    >(
        'catalog/fetchCatalogPage',
        async (_, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi;
            const limit = getCatalogPageLimit(getState());
            const sort = getCatalogPageSort(getState());
            const order = getCatalogPageOrder(getState());
            const search = getCatalogPageSearch(getState());
            const page = getCatalogPageNum(getState());
            const type = getCatalogPageType(getState());

            try {
                addQueryParams({
                    sort, order, search, type,
                });
                const response = await extra.api.get<CatalogItem[]>('/catalog', {
                    params: {
                        _expand: 'catalog',
                        _limit: limit,
                        _page: page,
                        _sort: sort,
                        _order: order,
                        _type: type,
                        q: search,
                    },
                });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
