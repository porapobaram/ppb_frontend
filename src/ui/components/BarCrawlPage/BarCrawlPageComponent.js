/* eslint-disable react/button-has-type */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import BarCrawlItem from './BarCrawlItem';
import { object, func, array } from 'prop-types';
import './BarCrawlPageContainer.scss';
import leftArr from './assets/leftArrow.svg';
import rightArr from './assets/rightArrow.svg';


const propTypes = {
	settings: object,
	onClickHandler: func,
	onNextArrow: func,
	onPreviousArrow: func,
	ref: func,
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
		const { settings, onClickHandler, Slider, ref, barCrawlPageData } = this.props;
		return (
			<div className="barcrawl-container-wrapper">
				{barCrawlPageData && (
					<Slider ref={c => (this.slider = c)} {...settings}>
						{barCrawlPageData.map(item => {
							console.log(item);
							return <BarCrawlItem onClickHandler={onClickHandler} key={item.bcName} item={item} />;
						})}
					</Slider>
				)}
				<div className="barcrawl-arr">
					<div>
						<img alt="Left" src={leftArr} onClick={this.previous} className="barcrawl-arr-left"/>
					</div>
					<div>
						<img alt="Right" src={rightArr} onClick={this.next} className="barcrawl-arr-right"/>
					</div>
					
				</div>
			</div>
		);
	}
}

BarCrawlPageComponent.propTypes = propTypes;

export default BarCrawlPageComponent;
