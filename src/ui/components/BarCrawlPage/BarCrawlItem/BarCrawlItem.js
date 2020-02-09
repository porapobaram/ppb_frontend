import React from 'react';
import { func, object, string } from 'prop-types';
import './BarCrawlItem.scss';

const propTypes = {
	item: object,
	onClickHandler: func,
	bcImage: string,
	bcName: string,
	bcTime: string,
	bcPrice: string,
	bcDescription: string,
};

const BarCrawlItem = ({ item, onClickHandler }) => {
	const { bcImage, bcName, bcTime, bcPrice, bcDescription } = item;
	return (
		<div className="barcrawl-page-item">
			<img alt="Bar" src={bcImage} className="barcrawl-image" />
			<div className="barcrawl-text">
				<div className="barcrawl-header">
					<h2 className="barcrawl-name">{bcName}</h2>
					<button className="barcrawl-button" type="button" onClick={onClickHandler}>
						Подробнее
					</button>
				</div>
				<div className="barcrawl-time-price">
					<p className="barcrawl-time">{bcTime}</p>
					<p className="barcrawl-price">{bcPrice}</p>
				</div>
				<p className="barcrawl-description">{bcDescription}</p>
			</div>
		</div>
	);
};

BarCrawlItem.propTypes = propTypes;

export default BarCrawlItem;
