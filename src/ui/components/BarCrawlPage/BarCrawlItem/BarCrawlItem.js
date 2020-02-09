import React from 'react';
import { func, object, string } from 'prop-types';
import './BarCrawlItem.scss';

const propTypes = {
	item: object,
	onClickHandler: func,
	bcImg: string,
	bcName: string,
	bcTime: string,
	bcPrice: string,
	bcDescription: string,
};

const BarCrawlItem = ({ item, onClickHandler }) => {
	const { bcImage, bcName, bcTime, bcPrice, bcDescription } = item;
	return (
		<div>
			<img alt="Bar" src={bcImage} />
			<h2>{bcName}</h2>
			<p>{bcTime}</p>
			<p>{bcPrice}</p>
			<p>{bcDescription}</p>
			<button type="button" onClick={onClickHandler}>
				Подробнее
			</button>
		</div>
	);
};

BarCrawlItem.propTypes = propTypes;

export default BarCrawlItem;
