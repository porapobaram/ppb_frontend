import React, { Component } from 'react';
import BarCrawlPageComponent from './BarCrawlPageComponent';
import { connect } from 'react-redux';

import { getAllBarcrawls } from '../../../reduxStore/barCrawl/actions';

class BarCrawlPageContainer extends Component {
	constructor(props) {
		super(props);
		this.onClickHandler = this.onClickHandler.bind(this);
	}

	componentDidMount() {
		this.props.getAllBarcrawls();
	}

	onClickHandler = () => {
		console.log('test');
	};

	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
		};
		return <BarCrawlPageComponent onClickHandler={this.onClickHandler} settings={settings} />;
	}
}

const mapDispatchToProps = { getAllBarcrawls };

export default connect(null, mapDispatchToProps)(BarCrawlPageContainer);
