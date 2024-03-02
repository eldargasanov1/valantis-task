import { FC } from 'react';
import { Provider } from 'react-redux';
import { PropsWithChildren } from 'shared';
import { store } from './store';

export const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};
