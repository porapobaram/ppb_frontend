/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import BarPageComponent from './BarPageComponent';
import { connect } from 'react-redux';
import { array, func, object, string, number } from 'prop-types';
import { getRandomBar, setBarEffort, getBarEffortCookies, setBarEffortCookies } from '../../../reduxStore/bar/actions';
import Slider from 'react-slick';
import { push } from 'connected-react-router';

const propTypes = {
	randomBar: object,
	barName: string,
	address: string,
	bonus: string,
	barInfo: string,
	phone: string,
	fbLink: string,
	formattedPhone: string,
	effort: number,
	openHours: array,
	sliderPhotos: array,
	push: func,
	getRandomBar: func,
	setBarEffort: func,
	getBarEffortCookies: func,
	setBarEffortCookies: func,
	onClickHandler: func,
	onClickHandlerMaps: func,
};

class BarPageContainer extends Component {
	constructor(props) {
		super(props);
		this.onClickHandler = this.onClickHandler.bind(this);
		this.onClickHandlerMaps = this.onClickHandlerMaps.bind(this);
	}

	componentDidMount() {
		this.props.getRandomBar();
		this.props.getBarEffortCookies();
	}

	componentDidUpdate(prevProps) {
		if (this.props.effort !== prevProps.effort) {
			this.props.setBarEffortCookies(this.props.effort);
		}
	}

	componentWillUnmount() {
		const { effort } = this.props;
		this.props.setBarEffort({ effort });
	}

	onClickHandler = () => {
		const { effort, push } = this.props;
		if (effort === 3) {
			push('/randomizer');
		} else {
			this.props.getRandomBar();
			this.props.setBarEffort({ effort });
		}
	};

	onClickHandlerMaps = () => {
		const { push } = this.props;
		push('/map');
	};

	render() {
		const { randomBar, effort } = this.props;

		const settings = {
			speed: 1600,
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			autoplaySpeed: 3000,
			autoplay: true,
			adaptiveHeight: true,
			arrows: false,
		};
		return (
			<div>
				<BarPageComponent
					randomBarObject={randomBar}
					Slider={Slider}
					settings={settings}
					onClickHandler={this.onClickHandler}
					onClickHandlerMaps={this.onClickHandlerMaps}
					effort={effort}
				/>
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
			openHours: state.randomBarReducer.randomBar.openHours,
			sliderPhotos: state.randomBarReducer.randomBar.sliderPhotos,
		},
		effort: state.randomBarReducer.effort,
	};
};
const mapDispatchToProps = {
	getRandomBar,
	setBarEffort,
	getBarEffortCookies,
	setBarEffortCookies,
	push,
};

export default connect(mapStateToProps, mapDispatchToProps)(BarPageContainer);
