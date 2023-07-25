import { Brand, TypeOfDevice } from 'shared/types';
import { EntityState } from '@reduxjs/toolkit';

export interface CatalogItem {
    id: string;
    name: string;
    img?: string;
    description?: string;
    price: number;
    type: TypeOfDevice;
    brand: Brand;
}

export interface CatalogItemSchema extends EntityState<CatalogItem> {
    isLoading: boolean;
    error?: string;
    data?: CatalogItem;
}

export enum CatalogItemView {
    BIG = 'BIG',
    SMALL = 'SMALL',
}

export enum CatalogItemSortField {
    PRICE = 'price',
    TITLE = 'title',
    BRAND = 'brand',
    TYPEOFDEVICE = 'typeOfDevice'
}
