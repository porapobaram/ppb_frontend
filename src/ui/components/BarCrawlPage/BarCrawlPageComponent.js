/* eslint-disable react/button-has-type */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import BarCrawlItem from './BarCrawlItem';
import { object, func, array } from 'prop-types';
import './BarCrawlPageContainer.scss';
import lAr from './assets/lAr.svg';
import rAr from './assets/rAr.svg';

const propTypes = {
	settings: object,
	onClickHandler: func,
	onNextArrow: func,
	onPreviousArrow: func,
	barCrawlPageData: array,
};

// eslint-disable-next-line react/prop-types
class BarCrawlPageComponent extends React.Component {
	constructor(props) {
		super(props);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
	}

	next() {
		this.slider.slickNext();
	}

	previous() {
		this.slider.slickPrev();
	}

	render() {
		const { settings, onClickHandler, Slider, barCrawlPageData } = this.props;
		return (
			<div className="barcrawl-container-wrapper">
				<div className="barcrawl-arr">
					<div className="barcrawl-arr-left">
						<img alt="Left" src={rAr} onClick={this.previous} />
					</div>
					<div className="barcrawl-arr-right">
						<img alt="Right" src={lAr} onClick={this.next} />
					</div>
				</div>
				{barCrawlPageData && (
					<Slider ref={c => (this.slider = c)} {...settings}>
						{barCrawlPageData.map(item => {
							console.log(item);
							return <BarCrawlItem onClickHandler={onClickHandler} key={item.bcName} item={item} />;
						})}
					</Slider>
				)}
			</div>
		);
	}
}

BarCrawlPageComponent.propTypes = propTypes;

export default BarCrawlPageComponent;
