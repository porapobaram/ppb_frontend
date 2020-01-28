import React, { Component } from "react";
// import BarCrawlPageComponent from "./BarCrawlPageComponent";
import { test } from "./data";
// import { uid } from "react-uid";
import Slider from "react-slick";
import BarCrawlItem from "../BarCrawlItem";

class BarCrawlPageContainer extends Component {
  constructor(props) {
    super(props);
  }

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
          return <BarCrawlItem key={item.bcId} item={item} />;
        })}
      </Slider>
    );
  }
}

export default BarCrawlPageContainer;
