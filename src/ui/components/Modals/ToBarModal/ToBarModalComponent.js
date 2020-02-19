import React, { Component } from 'react';
import './ToBarModalComponent.scss';

// eslint-disable-next-line react/prefer-stateless-function
class ToBarModalComponent extends Component {
	render() {
		return (
			<div className="toBarModal-wrapper">
				<div className="toBarModal-container">
					<div className="toBarModal-text">Прокладываем маршрут к бару на карте</div>
					<div className="toBarModal-icon" />
				</div>
			</div>
		);
	}
}

export default ToBarModalComponent;
