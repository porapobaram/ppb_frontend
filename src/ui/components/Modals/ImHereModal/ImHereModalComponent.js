import React, { Component } from 'react';
import { closeModal } from '../../../../reduxStore/modal/actions';
import { connect } from 'react-redux';
import './ImHereModalComponent.scss';

class ImHereModalComponent extends Component {
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
			<div className="userInBarModal-wrapper" onClick={this.onClickHandler}>
				<div className="userInBarModal-container">
					<button className="userInBar-button">Я на месте!</button>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = {
	closeModal,
};

export default connect(null, mapDispatchToProps)(ImHereModalComponent);
