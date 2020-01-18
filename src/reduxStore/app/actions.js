import * as actionTypes from './actionTypes';

export const setInitialState = (data) => (dispatch) => {
    dispatch({type: actionTypes.SET_INITIAL_STATE, data:data})
} ;