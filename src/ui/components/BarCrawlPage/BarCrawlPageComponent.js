/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import BarCrawlItem from './BarCrawlItem';
import { object, func, array } from 'prop-types';

const propTypes = {
	settings: object,
	onClickHandler: func,
	barCrawlPageData: array,
};

// eslint-disable-next-line react/prop-types
const BarCrawlPageComponent = ({ settings, onClickHandler, Slider, barCrawlPageData }) => (
	<div>
		{barCrawlPageData && (
			<Slider {...settings}>
				{barCrawlPageData.map(item => {
					console.log(item);
					return <BarCrawlItem onClickHandler={onClickHandler} key={item.bcName} item={item} />;
				})}
			</Slider>
		)}
	</div>
);

BarCrawlPageComponent.propTypes = propTypes;

export default BarCrawlPageComponent;
