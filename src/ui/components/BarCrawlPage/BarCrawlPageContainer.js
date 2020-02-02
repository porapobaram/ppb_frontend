import React, { Component } from 'react';
import BarCrawlPageComponent from './BarCrawlPageComponent';

class BarCrawlPageContainer extends Component {
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
      <BarCrawlPageComponent
        onClickHandler={this.onClickHandler}
        settings={settings}
      />
    );
  }
}

export default BarCrawlPageContainer;
