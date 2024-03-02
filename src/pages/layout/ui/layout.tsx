import { FC } from 'react';
import { LayoutProps } from '../layout.types';
import { Container } from '@mui/material';

export const Layout: FC<LayoutProps> = ({ children }) => {
	return <Container maxWidth='xl'>{children}</Container>;
};
