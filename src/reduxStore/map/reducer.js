import { GET_CURRENT_USERS_ON_MAP, SET_MAP_STAGE, SET_MAP_PAGE_ACCESS, SET_MY_LOCATION } from './actionTypes';

const initialState = {
	currentUsers: [	],
	mapStage: 'disabled', // disabled / direction / peopleNearBy
	buttonMapDisabled: false,
	locationToBar: {},
};

export function mapReducer(state = initialState, action) {
	switch (action.type) {
		case GET_CURRENT_USERS_ON_MAP:
			return {
				...state,
				currentUsers: action.data,
			};
		case SET_MAP_STAGE:
			return {
				...state,
				mapStage: action.payload,
			};
		case SET_MY_LOCATION:
			return {
				...state,
				locationToBar: action.payload,
			};
		case SET_MAP_PAGE_ACCESS:
			return {
				...state,
				buttonMapDisabled: action.buttonMapDisabled,
			};

		default:
			return state;
	}
}
