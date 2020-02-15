import React, * as react from 'react';
import RandomizeScreenComponent from './RandomizeScreenComponent';
import { getRandomBar, setBarEffort, setBarEffortCookies } from '../../../reduxStore/bar/actions';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import configureStore from "../../../reduxStore/store";

class RandomizeScreenContainer extends react.Component {
	constructor(props) {
		super(props);
		this.onClickHandler = this.onClickHandler.bind(this);
	}

	// eslint-disable-next-line react/sort-comp
	onClickHandler = () => {
		this.props.push('/barPage');
	};

	componentDidMount() {
		this.props.getRandomBar();
	}
	componentWillUnmount() {
		const { effort } = this.props;
		 this.props.setBarEffortCookies( effort );
	}

	render() {
		return <RandomizeScreenComponent onClickHandler={this.onClickHandler} />;
	}
}

const mapStateToProps = state => {
	return {
		effort: state.randomBarReducer.effort,
	};
};
const mapDispatchToProps = {
	getRandomBar,
	setBarEffort,
	setBarEffortCookies,
	push,
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomizeScreenContainer);
