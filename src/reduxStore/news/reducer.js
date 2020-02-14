import { GET_ALL_NEWS_SUCCESS, UPDATE_LIKES_COUNTER_SUCCESS } from './actionTypes';

const initialState = {
	allNews: [],
};

export function barNewsReducer(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_NEWS_SUCCESS:
			return {
				...state,
				allNews: action.payload,
			};
		case UPDATE_LIKES_COUNTER_SUCCESS:
			return {
				...state,
				allNews: state.allNews.map((item, index) => {
					if (index !== action.payload.index) {
						return item;
					}
					return {
						...item,
						likes: action.payload.data,
					};
				}),
			};
		default:
			return state;
	}
}
