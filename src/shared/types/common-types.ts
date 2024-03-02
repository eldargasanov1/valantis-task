import { ReactNode } from 'react';

export interface PropsWithChildren {
	children: ReactNode;
}

export type RequestStatusType =
	| 'uninitialized'
	| 'pending'
	| 'fulfilled'
	| 'rejected';
