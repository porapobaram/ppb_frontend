import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToBarModalComponent from '../Modals/ToBarModal';

export class ModalRoot extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const MODAL_COMPONENTS = {
			TEST_MODAL: ToBarModalComponent,
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
