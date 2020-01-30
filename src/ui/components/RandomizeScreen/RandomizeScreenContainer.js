import React, { Component } from 'react';
import RandomizeScreenComponent from './RandomizeScreenComponent';
// Class HOC, which returns modificated component

class RandomizeScreenContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <RandomizeScreenComponent />;
  }
}

export default RandomizeScreenContainer;

// import React, { Component } from "react";
// import LoginPageComponent from "./LoginPageComponent";
// Class HOC, which returns modificated component

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
