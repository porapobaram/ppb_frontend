import * as actionTypes from './actionTypes';

export const openModal = (modalType) => dispatch => {
	dispatch({ type: actionTypes.OPEN_MODAL, payload: {modalType: modalType, modalProps: ''} });
};
export const closeModal = () => dispatch => {
	dispatch({ type: actionTypes.CLOSE_MODAL, payload: {modalType: '', modalProps: ''} });
};
