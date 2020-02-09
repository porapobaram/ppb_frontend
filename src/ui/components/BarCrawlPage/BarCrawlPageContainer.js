import React, { Component } from 'react';
import BarCrawlPageComponent from './BarCrawlPageComponent';
import { connect } from 'react-redux';
import { func, array } from 'prop-types';
import Slider from 'react-slick';

import { getAllBarcrawls } from '../../../reduxStore/barCrawl/actions';

const propTypes = {
	getAllBarcrawls: func,
	barCrawlData: array,
};

class BarCrawlPageContainer extends Component {
	constructor(props) {
		super(props);
		this.onClickHandler = this.onClickHandler.bind(this);
	}

	componentDidMount() {
		// eslint-disable-next-line react/destructuring-assignment
		this.props.getAllBarcrawls();
	}

	onClickHandler = e => {
		e.preventDefault();
	};

	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
		};
		const { barCrawlData } = this.props;
		return (
			<BarCrawlPageComponent
				barCrawlPageData={barCrawlData}
				Slider={Slider}
				onClickHandler={this.onClickHandler}
				settings={settings}
			/>
		);
	}
}

BarCrawlPageContainer.propTypes = propTypes;

function mapStateToProps(state) {
	return {
		barCrawlData: state.barCrawlReducer.barCrawlPageData,
	};
}

const mapDispatchToProps = { getAllBarcrawls };

export default connect(mapStateToProps, mapDispatchToProps)(BarCrawlPageContainer);
