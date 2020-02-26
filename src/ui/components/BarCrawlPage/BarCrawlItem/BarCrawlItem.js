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
		<div className="bc-page-item">
			<div className="bc-header">
				<div className="bc-image-wrapper">
					<img alt="Bar" src={bcImage} className="bc-image" />
				</div>
				<div className="bc-left-block">
					<h2 className="bc-name">Ну и шо тут {bcName}</h2>
					<p className="bc-time">{bcTime}</p>
					<p className="bc-price">{bcPrice}</p>
					<button className="bc-button" type="button" onClick={onClickHandler}>
						Подробнее
					</button>
				</div>
			</div>
			<p className="bc-description">{bcDescription}</p>
		</div>
	);
};

BarCrawlItem.propTypes = propTypes;

export default BarCrawlItem;
