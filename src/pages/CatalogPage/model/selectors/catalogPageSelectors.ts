import { StateSchema } from 'app/providers/StoreProvider';
import {CatalogItemSortField, CatalogItemView} from "entities/CatalogItem/model/types/CatalogItemSchema";
import {TypeOfDevice} from "shared/types";

export const getCatalogPageIsLoading = (state: StateSchema) => state.catalogPage?.isLoading || false;
export const getCatalogPageError = (state: StateSchema) => state.catalogPage?.error;
export const getCatalogPageView = (state: StateSchema) => state.catalogPage?.view || CatalogItemView.SMALL;
export const getCatalogPageNum = (state: StateSchema) => state.catalogPage?.page || 1;
export const getCatalogPageLimit = (state: StateSchema) => state.catalogPage?.limit || 9;
export const getCatalogPageHasMore = (state: StateSchema) => state.catalogPage?.hasMore;
export const getCatalogPageInited = (state: StateSchema) => state.catalogPage?._inited;
export const getCatalogPageOrder = (state: StateSchema) => state.catalogPage?.order ?? 'asc';
export const getCatalogPageSort = (state: StateSchema) => state.catalogPage?.sort ?? CatalogItemSortField.TITLE;
export const getCatalogPageSearch = (state: StateSchema) => state.catalogPage?.search ?? '';
export const getCatalogPageType = (state: StateSchema) => state.catalogPage?.type ?? TypeOfDevice.COMPONENTS;
