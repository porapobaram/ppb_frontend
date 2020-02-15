import { GET_BAR_EFFORT_COOKIE, GET_RANDOM_BAR, SET_BAR_EFFORT, SET_BAR_EFFORT_COOKIE } from './actionTypes';

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
};

export function randomBarReducer(state = initialState, action) {
	switch (action.type) {
		case GET_RANDOM_BAR:
			return {
				...state,
				randomBar: action.data,
				effort: state.effort,
			};
		case SET_BAR_EFFORT:
			return {
				...state,
				effort: state.effort === 3 ? (state.effort = 1) : state.effort + 1,
			};
		case GET_BAR_EFFORT_COOKIE:
			return {
				...state,
				effort: action.payload,
			};
		case SET_BAR_EFFORT_COOKIE:
			return {
				...state,
				effort: state.effort,
			};
		default:
			return state;
	}
}
