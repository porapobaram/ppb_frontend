import React, { Component } from 'react';
import FeedComponent from './FeedComponent';
import { getNewsFeed } from '../../../reduxStore/news/actions';
import { connect } from 'react-redux';
import { func } from 'prop-types';

const propTypes = {
	getNewsFeed: func,
};

class FeedContainer extends Component {
	// eslint-disable-next-line no-useless-constructor
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

FeedContainer.propTypes = propTypes;

const mapDispatchToProps = {
	getNewsFeed,
};

export default connect(null, mapDispatchToProps)(FeedContainer);
