import React, { Component } from 'react';
import ButtonComponent from './RandomizeScreenComponent';
// Class HOC, which returns modificated component

class ButtonContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ButtonComponent />;
  }
}

export default ButtonContainer;

// import React, { Component } from "react";
// import LoginPageComponent from "./LoginPageComponent";
// // Class HOC, which returns modificated component

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
