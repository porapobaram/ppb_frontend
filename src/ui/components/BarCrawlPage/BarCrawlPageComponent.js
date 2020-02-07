/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import BarCrawlItem from './BarCrawlItem';
import { test } from './data';
import { object, func } from 'prop-types';

const propTypes = {
	settings: object,
	onClickHandler: func
};

// eslint-disable-next-line react/prop-types
const BarCrawlPageComponent = ({ settings, onClickHandler, Slider }) => (
	<div>
		<Slider {...settings}>
			{test.map(item => {
				return (
					<BarCrawlItem
						onClickHandler={onClickHandler}
						key={item.bcId}
						item={item}
					/>
				);
			})}
		</Slider>
	</div>
);

BarCrawlPageComponent.propTypes = propTypes;

export default BarCrawlPageComponent;
