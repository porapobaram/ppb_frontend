import React, { Component } from 'react';
import BarPageComponent from './BarPageComponent';
import { connect } from 'react-redux';
import SliderComponent from './Slider/SliderComponent';
import { array, func, object, string } from 'prop-types';
import { getRandomBar } from '../../../reduxStore/bar/actions';

const propTypes = {
	randomBar: object,
	barName: string,
	address: string,
	bonus: string,
	barInfo: string,
	phone: string,
	fbLink: string,
	getRandomBar: func,
	onClickHandler: func,
	openHours: array,
	sliderPhotos: array,
	formattedPhone: string,
};

class BarPageContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// this.props.getRandomBar();
	}

	render() {
		const { getRandomBar, randomBar } = this.props;

		return (
			<div>
				<SliderComponent />
				<BarPageComponent getBarDetails={getRandomBar} randomBarObject={randomBar} />
			</div>
		);
	}
}
BarPageContainer.propTypes = propTypes;
const mapStateToProps = state => {
	return {
		randomBar: {
			barName: state.randomBarReducer.randomBar.barName,
			address: state.randomBarReducer.randomBar.address,
			bonus: state.randomBarReducer.randomBar.bonus,
			barInfo: state.randomBarReducer.randomBar.barInfo,
			phone: state.randomBarReducer.randomBar.phone,
			formattedPhone: state.randomBarReducer.randomBar.formattedPhone,
			fbLink: state.randomBarReducer.randomBar.fbLink,
			// openHours:
			// sliderPhotos:
		},
	};
};
const mapDispatchToProps = { getRandomBar };

export default connect(mapStateToProps, mapDispatchToProps)(BarPageContainer);
