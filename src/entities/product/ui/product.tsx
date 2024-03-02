import { FC } from 'react';
import { ProductProps } from '../product.types';
import { Grid } from '@mui/material';

export const Product: FC<ProductProps> = ({ product }) => {
	return (
		<Grid container spacing={4}>
			<Grid item xs={3}>
				{product.id}
			</Grid>
			<Grid item xs={3}>
				{product.product}
			</Grid>
			<Grid item xs={3}>
				{product.brand ?? 'Бренд отсутствует'}
			</Grid>
			<Grid item xs={3}>
				{product.price}
			</Grid>
		</Grid>
	);
};
