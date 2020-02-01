import { requestFactory } from '../helpers/requestFactory';

// every method returns promise
export const barNewsApi = {
    getNewsFeed() {
        const url = '/news/getNewsFeed';
        const method = 'GET';

        return requestFactory(url, method);
    }
};