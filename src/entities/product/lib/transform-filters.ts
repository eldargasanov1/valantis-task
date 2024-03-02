import { PayloadAction } from '@reduxjs/toolkit';
import { FiltersData } from '../product.types';

export const transformFilters = (action: PayloadAction<FiltersData>) => {
	let filters = action.payload;
	if ('price' in filters && filters.price) {
		filters = { ...filters, price: +filters.price };
	}
	return filters;
};
