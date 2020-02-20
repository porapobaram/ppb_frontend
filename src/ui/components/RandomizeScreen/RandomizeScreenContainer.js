import React, * as react from 'react';
import RandomizeScreenComponent from './RandomizeScreenComponent';
import { getRandomBar } from '../../../reduxStore/bar/actions';
import { connect } from 'react-redux';
import { openModal } from '../../../reduxStore/modal/actions';

class RandomizeScreenContainer extends react.Component {
	constructor(props) {
		super(props);
		this.onClickHandler = this.onClickHandler.bind(this);
	}

	onClickHandler = () => {
		// getRandomBar();
		this.props.openModal('USER_SEARCH_BAR_MODAL');
		// this.props.openModal('USER_IN_BAR_MODAL');
	};

	componentDidMount() {
		this.props.getRandomBar();
	}

	render() {
		return <RandomizeScreenComponent onClickHandler={this.onClickHandler} />;
	}
}

const mapDispatchToProps = {
	getRandomBar,
	openModal,
};

export default connect(null, mapDispatchToProps)(RandomizeScreenContainer);
