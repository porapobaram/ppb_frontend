import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToBarModalComponent from '../Modals/ToBarModal';
import ImHereModalComponent from '../Modals/ImHereModal/ImHereModalComponent';

class ModalRoot extends Component {
	render() {
		const MODAL_COMPONENTS = {
			TEST_MODAL: ToBarModalComponent,
			USER_IN_BAR_MODAL: ImHereModalComponent,
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
