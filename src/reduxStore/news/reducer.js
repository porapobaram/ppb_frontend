import { GET_ALL_NEWS } from './actionTypes';

const initialState = {
	allNews: [],
};

export default function barNewsReducer(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_NEWS:
			return {
				...state,
				allNews: action.payload,
			};
		default:
			return state;
	}
}
