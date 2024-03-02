import { FC } from 'react';
import { ProductListProps } from '../product-list.types';
import {
	Box,
	CircularProgress,
	Grid,
	List,
	ListItem,
	Typography,
} from '@mui/material';
import { Product, productModel, useGetProducts } from 'entities';
import { useAppSelector } from 'app/store';
import { CustomPagination } from 'features';

export const ProductList: FC<ProductListProps> = () => {
	const { page, setPage } = useGetProducts();
	const isLoading = useAppSelector(productModel.selectIsLoading);
	const products = useAppSelector(productModel.selectAll);
	const sliceOfProducts = products.slice(page * 50 - 50, page * 50);

	return (
		<Box
			display='flex'
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
			gap='10px'
			height='100vh'
		>
			{sliceOfProducts.length ? (
				<>
					<ListItem>
						<Grid container spacing={4}>
							<Grid item xs={3}>
								ID
							</Grid>
							<Grid item xs={3}>
								Product
							</Grid>
							<Grid item xs={3}>
								Brand
							</Grid>
							<Grid item xs={3}>
								Price
							</Grid>
						</Grid>
					</ListItem>
					<List sx={{ flex: '1 1 auto', overflow: 'auto', width: '100%' }}>
						{sliceOfProducts.map(product => (
							<ListItem key={product.id}>
								<Product product={product} />
							</ListItem>
						))}
					</List>
					<CustomPagination
						page={page}
						onChange={(_, value) => setPage(value)}
					/>
				</>
			) : (
				<>
					{isLoading ? (
						<CircularProgress />
					) : (
						<Typography variant='h2'>No products :(</Typography>
					)}
				</>
			)}
		</Box>
	);
};
