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
	}

	componentDidMount() {
		// eslint-disable-next-line react/destructuring-assignment
		this.props.getAllBarcrawls();
	}

	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
		};
		return <BarCrawlPageComponent Slider={Slider} onClickHandler={this.onClickHandler} settings={settings} />;
	}
}

BarCrawlPageContainer.propTypes = propTypes;

const mapDispatchToProps = { getAllBarcrawls };

export default connect(null, mapDispatchToProps)(BarCrawlPageContainer);
