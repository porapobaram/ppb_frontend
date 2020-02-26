import React from 'react';
import BarCrawlItem from './BarCrawlItem';
import { object, func, array } from 'prop-types';
import './BarCrawlPageComponent.scss';
import lAr from './assets/lAr.svg';
import rAr from './assets/rAr.svg';

const propTypes = {
	settings: object,
	onClickHandler: func,
	onNextArrow: func,
	onPreviousArrow: func,
	barCrawlPageData: array,
	Slider: func,
};

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
			<div className="barcrawl-wrapper">
				<div className="barcrawl-container">
					{barCrawlPageData && (
						<Slider ref={c => (this.slider = c)} {...settings}>
							{barCrawlPageData.map(item => {
								return <BarCrawlItem onClickHandler={onClickHandler} key={item.bcName} item={item} />;
							})}
						</Slider>
					)}
				</div>
				<div className="barcrawl-arrows">
					<div>
						<img alt="Left" src={rAr} onClick={this.previous} className="barcrawl-arr-left" />
					</div>
					<div>
						<img alt="Right" src={lAr} onClick={this.next} className="barcrawl-arr-right" />
					</div>
				</div>
			</div>
		);
	}
}

BarCrawlPageComponent.propTypes = propTypes;

export default BarCrawlPageComponent;
