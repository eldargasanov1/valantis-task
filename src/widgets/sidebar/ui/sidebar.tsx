import { FC, useState } from 'react';
import { SidebarProps } from '../sidebar.types';
import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	TextField,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'app/store';
import { FiltersData, productModel } from 'entities';

export const Sidebar: FC<SidebarProps> = () => {
	const [currentFilter, setCurrentFilter] = useState<string>('');
	const dispatch = useAppDispatch();
	const { register, handleSubmit, reset } = useForm();

	const setData = (data: FiltersData) => {
		dispatch(productModel.setFilters(data));
	};
	const removeData = () => {
		reset();
		setCurrentFilter('');
		dispatch(productModel.removeFilters());
	};

	const onSubmit = (data: FiltersData) => {
		const isDataEmpty = !(data.product || data.brand || data.price);
		if (!isDataEmpty) {
			setData(data);
		} else {
			removeData();
		}
	};
	const onChangeSelect = (e: SelectChangeEvent<string>) => {
		reset();
		setCurrentFilter(e.target.value);
	};

	return (
		<Box
			component='form'
			onSubmit={handleSubmit(onSubmit)}
			onReset={removeData}
			noValidate
			sx={{ mt: 1 }}
			autoComplete='off'
		>
			<FormControl fullWidth margin='normal'>
				<InputLabel id='select-filter'>Filter</InputLabel>
				<Select
					labelId='select-filter'
					value={currentFilter}
					label='Filter'
					onChange={onChangeSelect}
				>
					<MenuItem value={'product'}>Product</MenuItem>
					<MenuItem value={'brand'}>Brand</MenuItem>
					<MenuItem value={'price'}>Price</MenuItem>
				</Select>
			</FormControl>
			{currentFilter ? (
				<>
					{currentFilter === 'product' && (
						<TextField fullWidth type='text' {...register('product')} />
					)}
					{currentFilter === 'brand' && (
						<TextField fullWidth type='text' {...register('brand')} />
					)}
					{currentFilter === 'price' && (
						<TextField fullWidth type='number' {...register('price')} />
					)}
					<Button
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: 1, mb: 1 }}
					>
						Поиск
					</Button>
					<Button type='reset' fullWidth variant='contained'>
						Очистить
					</Button>
				</>
			) : null}
		</Box>
	);
};
