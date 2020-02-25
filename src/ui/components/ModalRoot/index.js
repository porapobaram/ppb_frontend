/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToBarModalComponent from '../Modals/ToBarModal';
import ImHereModalComponent from '../Modals/ImHereModal/ImHereModalComponent';
import BonusBarModalComponent from '../Modals/BonusBarModal/BonusBarModalComponent';
import CommentsModal from '../Modals/CommentsModal';

class ModalRoot extends Component {
	render() {
		const MODAL_COMPONENTS = {
			USER_SEARCH_BAR_MODAL: ToBarModalComponent,
			USER_IN_BAR_MODAL: ImHereModalComponent,
			USER_GET_BONUS_MODAL: BonusBarModalComponent,
			COMMENTS_MODAL: CommentsModal,
			/* other modals */
		};
		if (!this.props.modalType) {
			return null;
		}
		const SpecificModal = MODAL_COMPONENTS[this.props.modalType];
		return <SpecificModal {...this.props.modalProps} />;
	}
}

const mapStateToProps = ({ modalReducer }) => {
	return {
		modalType: modalReducer.modalType,
	};
};

export default connect(mapStateToProps)(ModalRoot);
