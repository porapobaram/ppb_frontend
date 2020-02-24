import React from 'react';
import './barPageComponent.scss';
import { func, object, number } from 'prop-types';
import SlideItem from './SlideItem';

const propTypes = {
	randomBarObject: object,
	settings: object,
	effort: number,
	Slider: func,
	onClickHandler: func,
	onClickHandlerMaps: func,
};

const getWeekDay = () => {
	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	return days[new Date().getDay()].toString();
};

const BarPageComponent = ({ randomBarObject, settings, Slider, effort, onClickHandler, onClickHandlerMaps }) => {
	const filterDayOpen = randomBarObject.openHours.filter(workDays => {
		return workDays.days.toString().includes(getWeekDay().toString());
	});

	const workTime = filterDayOpen.map((workDays, idOpen) => {
		return (
			// eslint-disable-next-line react/no-array-index-key
			<p key={idOpen}>
				{`${workDays.days} ${workDays.open.map(workHours => {
					return workHours.renderedTime;
				})}`}
			</p>
		);
	});

	return (
		<div>
			<div className="slider-wrapper">
				<Slider className="slider-block" {...settings}>
					{randomBarObject.sliderPhotos.map((image, i) => (
						// eslint-disable-next-line react/no-array-index-key
						<SlideItem key={i} image={image} />
					))}
				</Slider>
				<div className="wave-block">{/* wave effect (img) */}</div>
			</div>
			<div className="bar-header">
				<h1>{randomBarObject.barName}</h1>
				<p>{randomBarObject.location['address']}</p>
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
					<div>{workTime}</div>
				</div>
			</div>
			<div className="buttons-container">
				<button type="button" className="one-more" onClick={onClickHandler}>
					<div className="arrow" />
					<div className="btn-block">
						<p className="top-text">Еще раз</p>
						<p className="bottom-text">{effort} попытка из 3</p>
					</div>
				</button>
				<button type="button" className="time" onClick={onClickHandlerMaps}>
					<p>Пора!</p>
				</button>
			</div>
		</div>
	);
};
BarPageComponent.propTypes = propTypes;

export default BarPageComponent;
