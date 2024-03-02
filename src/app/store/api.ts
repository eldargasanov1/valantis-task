import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getPassword } from 'app/lib';
import { BASE_URL } from 'shared';

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
		prepareHeaders: headers => {
			const password = getPassword();

			headers.set('X-Auth', password);
		},
	}),
	endpoints: () => ({}),
});
