import React, * as react from 'react';
import ModalComponent from './ModalComponent';

class ModalContainer extends react.Component {
	constructor(props) {
		super(props);
		this.onClickHandler1 = this.onClickHandler1.bind(this);
		this.onClickHandler2 = this.onClickHandler2.bind(this);
	}

	onClickHandler1 = () => {
		console.log('Click_1');
	};

	onClickHandler2 = () => {
		console.log('Click_2');
	};

	render() {
		return <ModalComponent onClickHandler1={this.onClickHandler1} onClickHandler2={this.onClickHandler2} />;
	}
}

export default ModalContainer;
