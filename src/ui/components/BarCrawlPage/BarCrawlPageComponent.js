import React from 'react';
import Slider from 'react-slick';
import BarCrawlItem from './BarCrawlItem';
import { test } from './data';

const BarCrawlPageComponent = ({ settings, onClickHandler }) => (
  <div>
    <Slider {...settings}>
      {test.map(item => {
        return (
          <BarCrawlItem
            onClickHandler={onClickHandler}
            key={item.bcId}
            item={item}
          />
        );
      })}
    </Slider>
  </div>
);

export default BarCrawlPageComponent;
