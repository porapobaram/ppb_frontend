import React, * as react from 'react';
import ModalComponent from './ModalComponent';
import { openModal, closeModal } from '../../../reduxStore/modal/actions';
import { connect } from 'react-redux';
import { func } from 'prop-types';

const propTypes = {
	openModal: func,
	closeModal: func,
};

class ModalContainer extends react.Component {
	constructor(props) {
		super(props);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal = () => {
		console.log('Click_1');
	};

	closeModal = () => {
		console.log('Click_2');
	};

	render() {
		return <ModalComponent onClickHandler1={this.openModal} onClickHandler2={this.closeModal} />;
	}
}

ModalContainer.propTypes = propTypes;

const mapDispatchToProps = {
	openModal,
	closeModal,
};

export default connect(null, mapDispatchToProps)(ModalContainer);
