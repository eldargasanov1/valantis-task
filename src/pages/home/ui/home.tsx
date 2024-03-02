import { FC } from 'react';
import { HomeProps } from '../home.types';
import { Grid } from '@mui/material';
import { ProductList, Sidebar } from 'widgets';

export const Home: FC<HomeProps> = () => {
	return (
		<Grid container spacing={6}>
			<Grid item lg={2} xs={3}>
				<Sidebar />
			</Grid>
			<Grid item lg={10} xs={12}>
				<ProductList />
			</Grid>
		</Grid>
	);
};
