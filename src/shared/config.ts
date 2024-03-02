import { getEnvVar } from 'shared';

export const BASE_URL = getEnvVar('VITE_BASE_URL');
export const BASE_PASSWORD = getEnvVar('VITE_PASSWORD');
