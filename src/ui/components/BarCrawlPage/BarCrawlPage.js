import React, { Component } from 'react';
import { test } from './data';
import Slider from 'react-slick';
import BarCrawlItem from './BarCrawlItem';

class BarCrawlPage extends Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler = () => {
    console.log('test');
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        {test.map(item => {
          return (
            <BarCrawlItem
              onClickHandler={this.onClickHandler}
              key={item.bcId}
              item={item}
            />
          );
        })}
      </Slider>
    );
  }
}

export default BarCrawlPage;
