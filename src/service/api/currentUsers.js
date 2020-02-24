import { requestFactory } from '../helpers/requestFactory';

// every method returns promise
export const currentUsersApi = {
	getCurrentUsersOnMap() {
		const url = '/map/currentUsers';
		const method = 'GET';

		return requestFactory(url, method);
	},
};
