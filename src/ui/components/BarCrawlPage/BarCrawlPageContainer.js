import React, { Component } from 'react';
import BarCrawlPageComponent from './BarCrawlPageComponent';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import Slider from 'react-slick';

import { getAllBarcrawls } from '../../../reduxStore/barCrawl/actions';

const propTypes = {
	getAllBarcrawls: func,
};

class BarCrawlPageContainer extends Component {
	constructor(props) {
		super(props);
		this.onClickHandler = this.onClickHandler.bind(this);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
	}

	componentDidMount() {
		// eslint-disable-next-line react/destructuring-assignment
		this.props.getAllBarcrawls();
	}

	onClickHandler = () => {
		console.log('test');
	};

	next() {
		this.slider.slickNext();
	}

	previous() {
		this.slider.slickPrev();
	}

	render() {
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
		};
		return (
			<BarCrawlPageComponent
				Slider={Slider}
				onClickHandler={this.onClickHandler}
				settings={settings}
				slickNext={this.next}
				slickPrev={this.previous}
			/>
		);
	}
}

BarCrawlPageContainer.propTypes = propTypes;

const mapDispatchToProps = { getAllBarcrawls };

export default connect(null, mapDispatchToProps)(BarCrawlPageContainer);
