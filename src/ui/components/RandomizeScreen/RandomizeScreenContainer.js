import React, { Component } from 'react';
import RandomizeScreenComponent from './RandomizeScreenComponent';

export default class RandomizeScreenContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }
  onClickHandler = () => {
    console.log('U clicked')
  };

  render() {
    return <RandomizeScreenComponent onClickHandler={this.onClickHandler} />;
  }
}


// class LoginPageContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.onCallbackHandler = this.onCallbackHandler.bind(this);
//   }

//   //here is logic

//   render() {
//     return <LoginPageComponent onCallbackHandler={this.onCallbackHandler} />;
//   }
// }

// export default LoginPageContainer;
