import { requestFactory } from '../helpers/requestFactory';

// every method returns promise
export const barCrawlApi = {
	getBarCrawlFeed() {
		const url = '/barCrawl/getBarCrawlFeed';
		const method = 'GET';

		return requestFactory(url, method);
	},
};
