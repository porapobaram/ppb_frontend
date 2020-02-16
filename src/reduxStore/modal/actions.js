import * as actionTypes from './actionTypes';

export const openModal = () => dispatch => {
	dispatch({ type: actionTypes.OPEN_MODAL, payload: 'openModal' });
};
export const closeModal = () => dispatch => {
	dispatch({ type: actionTypes.CLOSE_MODAL, payload: 'closeModal' });
};
