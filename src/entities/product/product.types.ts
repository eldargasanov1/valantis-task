// UI

export interface ProductProps {
	product: ProductType;
}

//===============================================

export interface ProductType {
	id: string;
	brand: string | null;
	price: number;
	product: string;
}

//===============================================

export interface InitialState {
	filters: FiltersData | null;
	isLoading: boolean;
}

//===============================================

export interface IdsResponse {
	result: string[];
}

export interface ProductsResponse {
	result: ProductType[];
}

//===============================================

export interface GetIds {
	action: 'get_ids';
	params: {
		offset: number;
		limit: number;
	};
}

export interface Filters {
	action: 'filter';
	params: FiltersData | null;
}

export type FiltersData = Partial<Omit<ProductType, 'id'>>;

export interface GetProducts {
	action: 'get_items';
	params: {
		ids: IdsResponse['result'];
	};
}
