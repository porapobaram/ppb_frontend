import fetch from 'isomorphic-fetch';
import { BASIC_API_URL } from '../../config';

const requestFactory = async (url, method, data) => {
    const apiUrl = BASIC_API_URL + url;
    try {
        const res = await fetch(apiUrl, {
            method: method,
            body: data,
		});
        if (!res.ok) {
             new Error('Error!');
        }
        return await res.json();
    } catch (err) {
         new Error(err);
    }
};

export { requestFactory };
