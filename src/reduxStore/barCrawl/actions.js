import * as actionTypes from './actionTypes';
import { barCrawlApi } from '../../service/api/barCrawl';

export const getAllBarcrawls = () => async dispatch => {
	const data = await barCrawlApi.getBarCrawlFeed();
	dispatch({ type: actionTypes.GET_BARCRAWLS, data });
};
