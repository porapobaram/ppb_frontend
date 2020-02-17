/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import BarCrawlItem from './BarCrawlItem';
import { test } from './data';
import { object, func } from 'prop-types';
import './BarCrawlPageComponent.scss';

const propTypes = {
	settings: object,
	onClickHandler: func,
	slickNext: func,
	slickPrev: func,
	Slider: func,
};

const BarCrawlPageComponent = ({ settings, Slider }) => (
	<div className="barcrawl-container">
		<div className="barcrawl-wrapper">
			<Slider {...settings}>
				{test.map(item => {
					return <BarCrawlItem key={item.bcId} item={item} />;
				})}
			</Slider>
			<button type="button" className="button">
				Previous
			</button>
			<button type="button" className="button">
				Next
			</button>
		</div>
	</div>
);

BarCrawlPageComponent.propTypes = propTypes;

export default BarCrawlPageComponent;
