import React, * as react from 'react';
import ModalComponent from './ModalComponent';

class ModalContainer extends react.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <ModalComponent />;
	}
}

export default ModalContainer;
