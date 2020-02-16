import React, * as react from 'react';
import RandomizeScreenComponent from './RandomizeScreenComponent';
import { getRandomBar } from '../../../reduxStore/bar/actions';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { openModal } from '../../../reduxStore/modal/actions';

class RandomizeScreenContainer extends react.Component {
	constructor(props) {
		super(props);
		this.onClickHandler = this.onClickHandler.bind(this);
	}

	onClickHandler = () => {
		// getRandomBar();
		this.props.openModal('TEST_MODAL');
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
	push,
	openModal,
};

export default connect(null, mapDispatchToProps)(RandomizeScreenContainer);
