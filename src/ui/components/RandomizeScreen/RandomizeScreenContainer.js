import React, * as react from 'react';
import RandomizeScreenComponent from './RandomizeScreenComponent';
import { getRandomBar } from '../../../reduxStore/bar/actions';
import { connect } from 'react-redux';

class RandomizeScreenContainer extends react.Component {
	constructor(props) {
		super(props);
		this.onClickHandler = this.onClickHandler.bind(this);
	}

	// eslint-disable-next-line react/sort-comp
	onClickHandler = () => {
		getRandomBar();
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
};

export default connect(null, mapDispatchToProps)(RandomizeScreenContainer);
