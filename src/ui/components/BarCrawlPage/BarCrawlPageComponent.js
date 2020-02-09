/* eslint-disable react/button-has-type */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import BarCrawlItem from './BarCrawlItem';
<<<<<<< HEAD
import { test } from './data';
import { object, func } from 'prop-types';
import './BarCrawlPageContainer.scss';
import leftArr from './assets/leftArrow.svg';
import rightArr from './assets/rightArrow.svg';
=======
import { object, func, array } from 'prop-types';
>>>>>>> origin/bar-crawl-page-petruk

const propTypes = {
	settings: object,
	onClickHandler: func,
	onNextArrow: func,
	onPreviousArrow: func,
	ref: func,
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
		const { settings, onClickHandler, Slider, onNextArrow, onPreviousArrow, ref } = this.props;
		return (
			<div className="barcrawl-container-wrapper">
				<Slider ref={c => (this.slider = c)} {...settings}>
					{test.map(item => {
						return <BarCrawlItem onClickHandler={onClickHandler} key={item.bcId} item={item} />;
					})}
				</Slider>
				<div style={{ textAlign: 'center' }}>
					<div>
						<img alt="Left" src={leftArr} onClick={this.previous} className=""/>
					</div>
					<div>
						<img alt="Right" src={rightArr} onClick={this.next} className=""/>
					</div>
					
				</div>
			</div>
		);
	}
}

BarCrawlPageComponent.propTypes = propTypes;

export default BarCrawlPageComponent;
