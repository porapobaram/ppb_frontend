import React from "react";
import Slider from "react-slick";
import BarCrawlItem from "./BarCrawlItem";
import { test } from "./data";
import { object, func } from "prop-types";

const propTypes = {
	settings: object,
	onClickHandler: func
};

const BarCrawlPageComponent = ({ settings, onClickHandler }) => (
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
