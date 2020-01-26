import React, { Component } from "react";
import ButtonComponent from "./ButtonComponent";
// Class HOC, which returns modificated component

class ButtonContainer extends Component {
  constructor() {
    super();
  }
  render() {
    return <ButtonComponent onClick={{}} />;
  }
}

export default ButtonContainer;
