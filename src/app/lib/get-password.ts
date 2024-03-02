import MD5 from 'crypto-js/md5';
import { BASE_PASSWORD } from 'shared/config';

const date = new Date();

const getCurrentMonth = () =>
	date.getUTCMonth() + 1 > 9
		? date.getUTCMonth() + 1
		: `0${date.getUTCMonth() + 1}`;

const getCurrentDay = () =>
	date.getUTCDate() > 9 ? date.getUTCDate() : `0${date.getUTCDate()}`;

export const getPassword = () => {
	const year = date.getUTCFullYear();
	const month = getCurrentMonth();
	const day = getCurrentDay();

	const password = `${BASE_PASSWORD}_${year}${month}${day}`;
	const passwordHash = MD5(password).toString();

	return passwordHash;
};
