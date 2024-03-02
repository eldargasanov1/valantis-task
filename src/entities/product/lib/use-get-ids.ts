import { productModel, useGetIdsMutation } from 'entities';
import { useEffect, useMemo, useState } from 'react';
import { Filters, GetIds } from '../product.types';
import { useAppDispatch, useAppSelector } from 'app/store';

export const useGetIds = () => {
	const dispatch = useAppDispatch();
	const [page, setPage] = useState(1);
	const filters = useAppSelector(productModel.selectFilters);
	const mode = filters ? 'by-filters' : 'default';
	const defaultParamsPage = mode === 'default' ? page : 1;

	const [getIds, idsInfo] = useGetIdsMutation();

	const defaultParams = useMemo<GetIds>(
		() => ({
			action: 'get_ids',
			params: {
				limit: 100,
				offset: 100 * defaultParamsPage - 100,
			},
		}),
		[defaultParamsPage]
	);
	const byFiltersParams = useMemo<Filters>(
		() => ({
			action: 'filter',
			params: filters,
		}),
		[filters]
	);
	const idsParams = useMemo(
		() => (mode === 'default' ? defaultParams : byFiltersParams),
		[mode, defaultParams, byFiltersParams]
	);

	useEffect(() => {
		let ignore = false;
		if (!ignore) {
			getIds(idsParams);
		}
		return () => {
			ignore = true;
		};
	}, [getIds, idsParams]);
	useEffect(() => {
		setPage(1);
		dispatch(productModel.removeProducts());
	}, [mode, dispatch, filters]);

	if (idsInfo.isError) {
		console.log('Ошибка получения ID:', idsInfo.error);
		getIds(idsParams);
	}

	return { page, setPage, idsInfo };
};
