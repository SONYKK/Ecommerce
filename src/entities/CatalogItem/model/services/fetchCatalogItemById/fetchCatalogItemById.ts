import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { CatalogItem } from '../../types/CatalogItemSchema';

export const fetchCatalogItemById = createAsyncThunk<
    CatalogItem,
    string,
    ThunkConfig<string>
    >(
        'CatalogItem/fetchCatalogItemById',
        async (catalogItemId, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const response = await extra.api.get<CatalogItem>(`/catalog/${catalogItemId}`, {
                    params: {
                        _expand: 'catalog',
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
