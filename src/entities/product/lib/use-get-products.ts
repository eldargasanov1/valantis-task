import { productModel, useGetProductsMutation } from 'entities';
import { useEffect, useMemo } from 'react';
import { GetProducts } from '../product.types';
import { useAppDispatch } from 'app/store';
import { useGetIds } from './use-get-ids';

export const useGetProducts = () => {
	const dispatch = useAppDispatch();
	const { page, setPage, idsInfo } = useGetIds();
	const [getProducts, productsInfo] = useGetProductsMutation();

	const productsParams = useMemo<GetProducts>(
		() => ({
			action: 'get_items',
			params: { ids: idsInfo.data ?? [] },
		}),
		[idsInfo.data]
	);

	useEffect(() => {
		let ignore = false;
		const idsLength = productsParams.params.ids.length;
		if (idsLength && !ignore) {
			getProducts(productsParams);
		}
		return () => {
			ignore = true;
		};
	}, [getProducts, productsParams]);
	useEffect(() => {
		let ignore = false;
		if (productsInfo.data && !ignore) {
			dispatch(productModel.setProducts(productsInfo.data));
		}
		return () => {
			ignore = true;
		};
	}, [productsInfo.data, dispatch]);
	useEffect(() => {
		let ignore = false;
		if (!ignore) {
			const isLoading = !idsInfo.isSuccess || !productsInfo.isSuccess;
			dispatch(productModel.setIsLoading(isLoading));
		}
		return () => {
			ignore = true;
		};
	}, [dispatch, idsInfo.isSuccess, productsInfo.isSuccess]);

	if (productsInfo.isError) {
		console.log('Ошибка получения товаров:', productsInfo.error);
		getProducts(productsParams);
	}

	return { page, setPage };
};
