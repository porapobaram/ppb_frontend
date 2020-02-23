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
		this.props.push('/barPage');
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
	openModal,
	push,
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomizeScreenContainer);
