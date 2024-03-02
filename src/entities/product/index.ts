export { Product } from './ui/product';
export { productModel, productReducer } from './model/product-slice';
export { useGetIdsMutation, useGetProductsMutation } from './api/product-api';
export type { ProductType, FiltersData } from './product.types';
export { useGetProducts } from './lib/use-get-products';
