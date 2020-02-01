import React, { Component } from 'react';
import RandomizeScreenComponent from './RandomizeScreenComponent';
import {userRandomizeBar} from "../../../reduxStore/app/actions";


export default class RandomizeScreenContainer extends Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler = (res) => {
    userRandomizeBar(res)
  };

  render() {
    return <RandomizeScreenComponent onClickHandler={this.onClickHandler} />;
  }
}

