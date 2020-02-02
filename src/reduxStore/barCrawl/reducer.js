import * as actionTypes from './actionTypes';

const initialState = {
	barCrawlPageData: [],
};

export default function barCrawlReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.GET_BARCRAWLS:
			return {
				...state,
				barCrawlPageData: action.data,
			};
		default:
			return state;
	}
}
