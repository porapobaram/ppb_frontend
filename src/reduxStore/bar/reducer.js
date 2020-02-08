import { GET_RANDOM_BAR } from './actionTypes';

const initialState = {
	randomBar: {
		barName: '',
		address: '',
		bonus: '',
		barInfo: '',
		phone: '',
		formattedPhone: '',
		fbLink: '',
		openHours: [],
		sliderPhotos: [],
	},
};

export function randomBarReducer(state = initialState, action) {
	switch (action.type) {
		case GET_RANDOM_BAR:
			return {
				...state,
				randomBar: action.data,
			};
		default:
			return state;
	}
}
