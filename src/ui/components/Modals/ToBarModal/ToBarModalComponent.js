import React, { Component } from 'react';
import { closeModal } from '../../../../reduxStore/modal/actions';
import { connect } from 'react-redux';
import './ToBarModalComponent.scss';

class ToBarModalComponent extends Component {
	constructor(props) {
		super(props);
		this.onClickHandler = this.onClickHandler.bind(this);
	}

	onClickHandler = () => {
		// eslint-disable-next-line react/destructuring-assignment,react/prop-types
		this.props.closeModal('CLOSE_MODAL');
	};

	render() {
		return (
			<div className="toBarModal-wrapper" onClick={this.onClickHandler}>
				<div className="toBarModal-container">
					<div className="toBarModal-text">Прокладываем маршрут к бару на карте</div>
					<div className="toBarModal-icon" />
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = {
	closeModal,
};

export default connect(null, mapDispatchToProps)(ToBarModalComponent);
