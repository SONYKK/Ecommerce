import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ItemDetailPageSchema } from '../types/ItemDetailPageSchema';

const initialState: ItemDetailPageSchema = {
    
};

export const ItemDetailPageSlice = createSlice({
    name: 'ItemDetailPage',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: ItemDetailPageActions } = ItemDetailPageSlice;
export const { reducer: ItemDetailPageReducer } = ItemDetailPageSlice;