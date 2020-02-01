import React, { Component } from 'react';
import RandomizeScreenComponent from './RandomizeScreenComponent';
import {getRandomBar} from "../../../reduxStore/app/actions";

export default class RandomizeScreenContainer extends Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler = () => {
    getRandomBar()
  };

  render() {
    return <RandomizeScreenComponent onClickHandler={this.onClickHandler} />;
  }
}

