import { OPEN_MODAL, CLOSE_MODAL } from './actionTypes';

const initialState = {
	modalType: '',
};

export function modalReducer(state = initialState, action) {
	switch (action.type) {
		case OPEN_MODAL:
			return {
				...state,
				modalType: action.payload.modalType,
				modalProps: action.payload.modalProps,
			};
		case CLOSE_MODAL:
			return {
				...state,
				modalType: '',
				modalProps: '',
			};
		default:
			return state;
	}
}
