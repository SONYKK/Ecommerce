import {createEntityAdapter, createSlice, PayloadAction} from '@reduxjs/toolkit';
import { CatalogPageSchema } from '../types/CatalogPageSchema';
import {CatalogItem, CatalogItemSortField, CatalogItemView} from "entities/CatalogItem/model/types/CatalogItemSchema";
import {StateSchema} from "app/providers/StoreProvider";
import {TypeOfDevice} from "shared/types";
import {fetchCatalogPage} from "../../model/services/fetchCatalogPage";

const catalogAdapter = createEntityAdapter<CatalogItem>({
    selectId: (catalogItem) => catalogItem.id,
});

export const getCatalogItems = catalogAdapter.getSelectors<StateSchema>(
    (state) => state.catalogPage || catalogAdapter.getInitialState()
)

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
            type: TypeOfDevice.SERVER
            }),
    
    reducers: {  },

    extraReducers: (builder) => {
        builder
            .addCase(fetchCatalogPage.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCatalogPage.fulfilled, (state,
                                                  action: PayloadAction<CatalogItem[]>) => {
                state.isLoading = false;
                state.error = undefined;
                catalogAdapter.setAll(state, action.payload);
                
            })
            .addCase(fetchCatalogPage.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: CatalogPageActions } = CatalogPageSlice;
export const { reducer: CatalogPageReducer } = CatalogPageSlice;


