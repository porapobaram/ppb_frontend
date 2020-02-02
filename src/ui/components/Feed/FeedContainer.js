import React, { Component } from "react";
import FeedComponent from "./FeedComponent";
// Class HOC, which returns modificated component

class FeedContainer extends Component {
  constructor(props) {
    super(props);
  }

  //here is logic
  // onCallbackHandler(params) {
  //   console.log(params);
  // }
  render() {
    return <FeedComponent />;
  }
}

export default FeedContainer;
