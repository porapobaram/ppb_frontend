import { GET_RANDOM_BAR, SET_BAR_EFFORT } from './actionTypes';

const initialState = {
	randomBar: {
		barName: '',
		address: '',
		bonus: '',
		barInfo: '',
		phone: '',
		formattedPhone: '',
		fbLink: '',
		openHours: [
			{
				days: '',
				open: [{}],
			},
		],
		sliderPhotos: [],
	},
	effort: 1,
	buttonDisabled: false,
};

export function randomBarReducer(state = initialState, action) {
	switch (action.type) {
		case GET_RANDOM_BAR:
			return {
				...state,
				randomBar: action.data,
			};
		case SET_BAR_EFFORT:
			return {
				...state,
				effort: action.payload,
				buttonDisabled: action.disabledButton,
			};
		default:
			return state;
	}
}
