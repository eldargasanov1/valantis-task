import { FC } from 'react';
import { Pagination } from '@mui/material';
import { useAppSelector } from 'app/store';
import { CustomPaginationProps } from '../custom-pagination.types';
import { productModel } from 'entities';

export const CustomPagination: FC<CustomPaginationProps> = props => {
	const products = useAppSelector(productModel.selectAll);
	const length = Math.ceil(products.length / 50);
	const count = length !== 0 ? length : 1;

	return <Pagination count={count} showFirstButton showLastButton {...props} />;
};
