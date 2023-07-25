import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CatalogItem, CatalogItemSortField, CatalogItemView } from 'entities/CatalogItem/model/types/CatalogItemSchema';
import { StateSchema } from 'app/providers/StoreProvider';
import { TypeOfDevice } from 'shared/types';
import { CATALOG_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { fetchCatalogPage } from '../../model/services/fetchCatalogPage';
import { CatalogPageSchema } from '../types/CatalogPageSchema';

const catalogAdapter = createEntityAdapter<CatalogItem>({
    selectId: (catalogItem) => catalogItem.id,
});

export const getCatalogItems = catalogAdapter.getSelectors<StateSchema>(
    (state) => state.catalogPage || catalogAdapter.getInitialState(),
);

export const CatalogPageSlice = createSlice({
    name: 'CatalogPageSlice',
    initialState: catalogAdapter.getInitialState<CatalogPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: CatalogItemView.SMALL,
        page: 1,
        hasMore: true,
        _inited: false,
        limit: 9,
        sort: CatalogItemSortField.TITLE,
        search: '',
        order: 'asc',
        type: TypeOfDevice.SERVER,
    }),

    reducers: {
        setView: (state, action: PayloadAction<CatalogItemView>) => {
            state.view = action.payload;
            localStorage.setItem(CATALOG_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: (state, action:PayloadAction<number>) => {
            state.page = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(CATALOG_VIEW_LOCALSTORAGE_KEY) as CatalogItemView;
            state.view = view;
            state.limit = view === CatalogItemView.BIG ? 4 : 9;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchCatalogPage.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCatalogPage.fulfilled, (
                state,
                action: PayloadAction<CatalogItem[]>,
            ) => {
                state.isLoading = false;
                state.error = undefined;
                catalogAdapter.addMany(state, action.payload);
                state.hasMore = action.payload.length > 0;
                state._inited = true;
            })
            .addCase(fetchCatalogPage.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: CatalogPageActions } = CatalogPageSlice;
export const { reducer: CatalogPageReducer } = CatalogPageSlice;
