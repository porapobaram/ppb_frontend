import * as actionTypes from './actionTypes';

export const openModal = (modalType = '', modalProps) => dispatch => {
	dispatch({ type: actionTypes.OPEN_MODAL, payload: { modalType, modalProps } });
};
export const closeModal = (modalType = '', modalProps) => dispatch => {
	dispatch({ type: actionTypes.CLOSE_MODAL, payload: { modalType, modalProps } });
};
