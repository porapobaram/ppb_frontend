import fetch from 'isomorphic-fetch';
import { BASIC_API_URL } from '../../config';

const requestFactory = async (url, method, data) => {
    const apiUrl = BASIC_API_URL + url;

    try {
        const res = await fetch(url, {
            method: method,
            body: data
        })
        if (!res.ok) {
            throw new Error('Error!');
        }
        return res.json();

    } catch (err) {
        throw new Error(err);
    }
}

export { requestFactory };
