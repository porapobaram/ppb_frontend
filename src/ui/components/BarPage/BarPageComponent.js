import React from 'react';
import './BarPageComponent.scss';
import { func, object, string, number, array } from 'prop-types';

const propTypes = {
	randomBarObject: object,
	barName: string,
	openHours: array,
	sliderPhotos: array,
	address: string,
	bonus: string,
	barInfo: string,
	phone: number,
	fbLink: string,
	formattedPhone: string,
	getBarDetails: func,
	onClickHandler: func,
};

const BarPageComponent = ({ randomBarObject, getBarDetails }) => {
	return (
		<>
			<div className="header">
				<h1>{randomBarObject.barName}</h1>
				<p>{randomBarObject.address}</p>
			</div>

			<div className="bonus-container">
				<div className="gift" />
				<div className="bonus">
					<p className="blue-text">Твой бонус в баре</p>
					<p className="gray-text">{randomBarObject.bonus}</p>
				</div>
			</div>
			<div className="descripton-container">
				<div className="main-descripton">
					<div className="information" />
					<p>{randomBarObject.barInfo}</p>
				</div>
				<div className="phone-number">
					<div className="phone-img" />
					<p className="phone">{randomBarObject.formattedPhone}</p>
				</div>
				<div className="name-container">
					<div className="facebook" />
					<p>{randomBarObject.fbLink}</p>
				</div>
				<div className="time-chedule">
					<div className="bell" />
					<p>{randomBarObject.openHours}</p>
				</div>
			</div>
			<div className="buttons-container">
				<button type="button" className="one-more">
					<div className="arrow" />
					<div
						className="btn-block"
						onClick={() => {
							getBarDetails();
						}}
					>
						<p className="top-text">Еще раз</p>
						<p className="bottom-text">1 попытка из 3</p>
					</div>
				</button>
				<button
					type="button"
					className="time"
					onClick={() => {
						getBarDetails();
					}}
				>
					<p>Пора!</p>
				</button>
			</div>
		</>
	);
};

BarPageComponent.propTypes = propTypes;

export default BarPageComponent;
