import { StateSchema } from 'app/providers/StoreProvider';

export const getCatalogItemData = (state: StateSchema) => state.catalogItem?.data;
export const getCatalogItemIsLoading = (state: StateSchema) => state.catalogItem?.isLoading;
export const getCatalogItemError = (state: StateSchema) => state.catalogItem?.error;
