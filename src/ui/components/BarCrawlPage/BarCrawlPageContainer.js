import React, { Component } from "react";
import BarCrawlPageComponent from "./BarCrawlPageComponent";
import { data } from "./data";
import { uid } from "react-uid";
import Slider from "react-slick";

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
        {data.map(item => {
          return <BarCrawlPageComponent key={uid(item)} item={item} />;
        })}
      </Slider>
    );
  }
}

export default BarCrawlPageContainer;
