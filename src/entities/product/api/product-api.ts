import { api } from 'app/store';
import {
	Filters,
	GetIds,
	GetProducts,
	IdsResponse,
	ProductsResponse,
} from '../product.types';

const productApi = api.injectEndpoints({
	endpoints: build => ({
		getIds: build.mutation<IdsResponse['result'], GetIds | Filters>({
			query: args => ({
				url: '/',
				method: 'POST',
				body: args,
			}),
			transformResponse: (response: IdsResponse) => response.result,
		}),
		getProducts: build.mutation<ProductsResponse['result'], GetProducts>({
			query: args => ({
				url: '/',
				method: 'POST',
				body: args,
			}),
			transformResponse: (response: ProductsResponse) => response.result,
		}),
	}),
});

export const { useGetIdsMutation, useGetProductsMutation } = productApi;
