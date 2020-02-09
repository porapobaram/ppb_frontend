/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import BarCrawlItem from './BarCrawlItem';
import { test } from './data';
import { object, func } from 'prop-types';
import './BarCrawlPageContainer.scss';

const propTypes = {
	settings: object,
	onClickHandler: func,
	slickNext: func,
	slickPrev: func,
};

// eslint-disable-next-line react/prop-types
const BarCrawlPageComponent = ({ settings, onClickHandler, Slider }) => (
	<div className="barcrawl-container-wrapper">
		<Slider ref={c => (this.slider = c)} {...settings}>
			{test.map(item => {
				return <BarCrawlItem onClickHandler={onClickHandler} key={item.bcId} item={item} />;
			})}
		</Slider>
		<button className="button">
            Previous
        </button>
        <button className="button">
            Next
        </button>
	</div>
);

BarCrawlPageComponent.propTypes = propTypes;

export default BarCrawlPageComponent;
