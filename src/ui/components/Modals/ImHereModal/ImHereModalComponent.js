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
		this.props.closeModal('CLOSE_MODAL');
	};

	render() {
		return (
			<div className="userInBarModal-wrapper">
				<div className="userInBarModal-container">
					<button className="userInBar-button" onClick={this.onClickHandler}>
						Я на месте!
					</button>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = {
	closeModal,
};

export default connect(null, mapDispatchToProps)(ImHereModalComponent);
