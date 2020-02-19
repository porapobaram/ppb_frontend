import React, { Component } from 'react';
import './ToBarModalComponent.scss'

class ToBarModalComponent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="toBarModal-wrapper">
				<div className="toBarModal-container">
					<div className="toBarModal-text">test</div>
					<div className="toBarModal-icon">testing picture</div>
				</div>
			</div>
		);
	}
}

export default ToBarModalComponent;
