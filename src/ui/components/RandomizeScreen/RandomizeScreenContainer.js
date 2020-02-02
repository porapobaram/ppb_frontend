import React, { Component } from 'react';
import RandomizeScreenComponent from './RandomizeScreenComponent';
import {userUseRandomize} from "../../../reduxStore/app/actions";


export default class RandomizeScreenContainer extends Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler = () => {
    userUseRandomize();
  };

  render() {
    return <RandomizeScreenComponent onClickHandler={this.onClickHandler} />;
  }
}

