import React from 'react';
import MobileIcon from './assets/img/mobileIcon.svg';
import './onlyMobile.styles.scss';

const OnlyMobileComponent = () => {
	return (
		<div className="onlyMobile-wrapper">
			<div className="onlyMobile-container">
				<img src={MobileIcon} alt="Icon" className="onlyMobile-img" />
				<p className="onlyMobile-text">Ну надо же! Доступно только с мобильных устройств.</p>
			</div>
		</div>
	);
};

export { OnlyMobileComponent };
