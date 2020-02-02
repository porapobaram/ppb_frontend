import React, { Component } from "react";
import FeedComponent from "./FeedComponent";
import { getNewsFeed } from "../../../reduxStore/news/actions";
import { connect } from "react-redux";

class FeedContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getNewsFeed();
  }

  render() {
    return <FeedComponent />;
  }
}
const mapDispatchToProps = {
  getNewsFeed
};
export default connect(null, mapDispatchToProps)(FeedContainer);
