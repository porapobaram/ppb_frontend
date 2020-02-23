/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import BarPageComponent from './BarPageComponent';
import { connect } from 'react-redux';
import { array, func, object, string, number } from 'prop-types';
import { setBarEffort } from '../../../reduxStore/bar/actions';
import Slider from 'react-slick';
import { push } from 'connected-react-router';
import cookie from 'react-cookies';
import { MAX_EFFORT } from '../../../config';
import { getDateExpires } from '../../../service/helpers/cookieHelpers';
import { openModal } from '../../../reduxStore/modal/actions';

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
	setBarEffort: func,
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
		const { push } = this.props;
		const savedEfforts = Number(cookie.load('effort'));
		console.log({ savedEfforts });
		if (savedEfforts > MAX_EFFORT) {
			push('/randomizer');
		}
	}

	componentWillUnmount() {
		const { effort } = this.props;
		const updatedEffort = Number(effort + 1);
		this.props.setBarEffort(updatedEffort);
		cookie.save('effort', updatedEffort, { path: '/' }, { expires: getDateExpires(1) });
		cookie.save('lastBarVisited', encodeURI(JSON.stringify(this.props.randomBar)), { path: '/' });
	}

	onClickHandler = () => {
		const { push } = this.props;
		push('/randomizer');
	};

	onClickHandlerMaps = () => {
		const { push, openModal } = this.props;
		push('/map');
		setTimeout(() => {
			console.log('5 sec');
			openModal('USER_GET_BONUS_MODAL');
		}, 3000);
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
		randomBar: state.randomBarReducer.randomBar,
		effort: state.randomBarReducer.effort,
	};
};
const mapDispatchToProps = {
	setBarEffort,
	push,
	openModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(BarPageContainer);
