/* eslint-disable react/button-has-type */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import BarCrawlItem from './BarCrawlItem';
import { test } from './data';
import { object, func } from 'prop-types';
import './BarCrawlPageContainer.scss';

const propTypes = {
	settings: object,
	onClickHandler: func,
	onNextArrow: func,
	onPreviousArrow: func,
	ref: func,
};

// eslint-disable-next-line react/prop-types
class BarCrawlPageComponent extends React.Component {
	render() {
		const { settings, onClickHandler, Slider, onNextArrow, onPreviousArrow, ref } = this.props;
		return (
			<div className="barcrawl-container-wrapper">
				<Slider ref={ref} {...settings}>
					{test.map(item => {
						return <BarCrawlItem onClickHandler={onClickHandler} key={item.bcId} item={item} />;
					})}
				</Slider>
				<div style={{ textAlign: 'center' }}>
					<button className="button" onClick={onPreviousArrow}>
						Previous
					</button>
					<button className="button" onClick={onNextArrow}>
						Next
					</button>
				</div>
			</div>
		);
	}
}

BarCrawlPageComponent.propTypes = propTypes;

export default BarCrawlPageComponent;
