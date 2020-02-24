import { GET_RANDOM_BAR, SET_BAR_EFFORT, ADD_TO_ALL_RANDOM_BARS, INIT_ALL_RANDOM_BARS } from './actionTypes';

const initialState = {
	randomBar: {
		barName: '',
		address: '',
		bonus: '',
		barInfo: '',
		phone: '',
		formattedPhone: '',
		fbLink: '',
		location: [
			{
				address: '',
				lat: '',
				lng: '',
				labeledLatLngs: [
					{
						label: '',
						lat: '',
						lng: '',
					},
				],
				postalCode: '',
				cc: '',
				city: '',
				state: '',
				country: '',
				formattedAddress: [],
			},
		],
		openHours: [
			{
				days: '',
				open: [{}],
			},
		],
		sliderPhotos: [],
	},
	allRandomBars: [],
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
		case ADD_TO_ALL_RANDOM_BARS:
			return {
				...state,
				allRandomBars: [...state.allRandomBars, action.payload],
			};
		case INIT_ALL_RANDOM_BARS:
			return {
				...state,
				allRandomBars: action.payload,
			};
		default:
			return state;
	}
}
