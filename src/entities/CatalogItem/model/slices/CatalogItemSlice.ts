import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CatalogItem, CatalogItemSchema} from '../types/CatalogItemSchema';
import {fetchCatalogItemById} from "../services/fetchCatalogItemById/fetchCatalogItemById";

const initialState: CatalogItemSchema = {
    isLoading: false,
    data: undefined,
    error: undefined,
    ids: [],
    entities: {}
};

export const CatalogItemSlice = createSlice({
    name: 'CatalogItem',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCatalogItemById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCatalogItemById.fulfilled, (state,
                                                      action: PayloadAction<CatalogItem>,) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchCatalogItemById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: CatalogItemActions } = CatalogItemSlice;
export const { reducer: CatalogItemReducer } = CatalogItemSlice;