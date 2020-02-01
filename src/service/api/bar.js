import { requestFactory } from '../helpers/requestFactory';

// every method returns promise
export const barApi = {
	getRandomBar() {
		const url = '/bar/getRandomBar';
		const method = 'GET';

		return requestFactory(url, method);
	},
};
