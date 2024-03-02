import {
	createDraftSafeSelector,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';
import { InitialState, ProductType } from '../product.types';
import { RootState } from 'app/store';
import { transformFilters } from '../lib/transform-filters';

//===============================================

const productAdapter = createEntityAdapter<ProductType>();

const initialState = productAdapter.getInitialState<InitialState>({
	filters: null,
	isLoading: true,
});

const productSelectors = productAdapter.getSelectors(
	(state: RootState) => state.product
);

//===============================================

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setProducts: productAdapter.upsertMany,
		removeProducts: productAdapter.removeAll,
		setFilters: (state, action) => {
			state.filters = transformFilters(action);
		},
		removeFilters: state => {
			state.filters = null;
		},
		setIsLoading: (state, action) => {
			state.isLoading = action.payload;
		},
	},
});

//===============================================

const selectFilters = createDraftSafeSelector(
	[(state: RootState) => state],
	state => state.product.filters
);
const selectIsLoading = createDraftSafeSelector(
	[(state: RootState) => state],
	state => state.product.isLoading
);

export const productModel = {
	...productSelectors,
	...productSlice.actions,
	selectFilters,
	selectIsLoading,
};

export const productReducer = productSlice.reducer;
