import React, { Component } from 'react';
import { closeModal } from '../../../../reduxStore/modal/actions';
import { connect } from 'react-redux';
import './BonusBarModalComponent.scss';

class BonusBarModalComponent extends Component {
	constructor(props) {
		super(props);
		this.onClickHandler = this.onClickHandler.bind(this);
	}

	onClickHandler = () => {
		// eslint-disable-next-line react/destructuring-assignment,react/prop-types
		this.props.closeModal('CLOSE_MODAL');
	};

	onClickHandlerNextBar = () => {
		console.log('Click');
	};

	render() {
		return (
			<div className="bonusBarModal-wrapper" onClick={this.onClickHandler}>
				<div className="bonusBarModal-container">
					<div className="bonusBarModal-title">Твой бонус</div>
					<div className="bonusBarModal-icon">{`${``}`}</div>
					<div className="bonusBarModal-bonus">{`Шот самбука ${``}`}</div>
					<div className="bonusBarModal-nextButton" onClick={this.onClickHandlerNextBar}>
						Следующий Бар
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = {
	closeModal,
};

export default connect(null, mapDispatchToProps)(BonusBarModalComponent);
