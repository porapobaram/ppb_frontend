import React from 'react';
import RorateIcon from './assets/img/rorateIcon.svg';
import './onlyPortrait.styles.scss';

const OnlyPortraitComponent = () => {
	return (
		<div className="onlyPortrait-wrapper">
			<div className="onlyPortrait-container">
				<img src={RorateIcon} alt="Icon" className="onlyPortrait-img" />
				<p className="onlyPortrait-text">Ой-ей! Пожалуйста, переверните ваше устройство.</p>
			</div>
		</div>
	);
};

export { OnlyPortraitComponent };
