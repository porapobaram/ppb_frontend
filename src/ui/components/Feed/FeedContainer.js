import React, { Component } from 'react';
import FeedComponent from './FeedComponent';
import { getNewsFeed } from '../../../reduxStore/news/actions';
import { connect } from 'react-redux';

class FeedContainer extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log('test');
		this.props.getNewsFeed();
	}

	render() {
		return <FeedComponent />;
	}
}
const mapDispatchToProps = {
	getNewsFeed,
};
export default connect(null, mapDispatchToProps)(FeedContainer);
