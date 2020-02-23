import React, * as react from 'react';
import RandomizeScreenComponent from './RandomizeScreenComponent';
import { getRandomBar } from '../../../reduxStore/bar/actions';
import { connect } from 'react-redux';
import { openModal } from '../../../reduxStore/modal/actions';
import { push } from 'connected-react-router';

class RandomizeScreenContainer extends react.Component {
	constructor(props) {
		super(props);
		this.onClickHandler = this.onClickHandler.bind(this);
	}

	onClickHandler = () => {
		// getRandomBar();
		// this.props.openModal('USER_SEARCH_BAR_MODAL');
		// this.props.openModal('USER_IN_BAR_MODAL');
		this.props.openModal('USER_GET_BONUS_MODAL');
	};

	componentDidMount() {
		this.props.getRandomBar();
	}

	render() {
		return (
			<RandomizeScreenComponent onClickHandler={this.onClickHandler} buttonDisabled={this.props.buttonDisabled} />
		);
	}
}

const mapStateToProps = state => {
	return {
		effort: state.randomBarReducer.effort,
		buttonDisabled: state.randomBarReducer.buttonDisabled,
	};
};
const mapDispatchToProps = {
	getRandomBar,
	push,
	openModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomizeScreenContainer);
