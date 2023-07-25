import {SortOrder, TypeOfDevice} from "shared/types";
import {CatalogItem, CatalogItemSortField, CatalogItemView} from "entities/CatalogItem/model/types/CatalogItemSchema";
import {EntityState} from "@reduxjs/toolkit";

export interface CatalogPageSchema extends EntityState<CatalogItem>{
    isLoading?: boolean;
    error?: string;
    
    // pagination
    page: number;
    limit: number;
    hasMore: boolean;
    // filters
    view: CatalogItemView;
    order: SortOrder;
    sort: CatalogItemSortField;
    search: string;
    type: TypeOfDevice;
    
    _inited: boolean;
}