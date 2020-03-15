import { currentUsersApi } from '../../service/api/currentUsers';
import { GET_CURRENT_USERS_ON_MAP, SET_MAP_STAGE, SET_MY_LOCATION } from './actionTypes';

export const getCurrentUsers = () => async dispatch => {
	const data = await currentUsersApi.getCurrentUsersOnMap();
	console.log(`users${JSON.stringify(data)}`);
	dispatch({ type: GET_CURRENT_USERS_ON_MAP, data });
};

export const setMapState = mapState => dispatch => {
	dispatch({ type: SET_MAP_STAGE, payload: mapState });
};

export const setMyLocation = locationToBar => dispatch => {
	// console.log(`ACTIONlocationToBar${JSON.stringify(locationToBar)}`);
	dispatch({ type: SET_MY_LOCATION, payload: locationToBar });
	// console.log(`locationToBar${JSON.stringify(locationToBar)}`);
};