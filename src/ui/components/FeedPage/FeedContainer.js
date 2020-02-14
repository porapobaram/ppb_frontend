import React, { Component } from 'react';
import FeedComponent from './FeedComponent';
import { getNewsFeed } from '../../../reduxStore/news/actions';
import { connect } from 'react-redux';
import { func, array } from 'prop-types';

const propTypes = {
	getNewsFeed: func,
	allNews: array,
};

class FeedContainer extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// eslint-disable-next-line react/destructuring-assignment
		this.props.getNewsFeed();
	}

	render() {
		return <FeedComponent allNews={this.props.allNews} />;
	}
}

FeedContainer.propTypes = propTypes;

const mapStateToProps = ({ barNewsReducer }) => {
	const { allNews } = barNewsReducer;
	return { allNews };
};

const mapDispatchToProps = {
	getNewsFeed,
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer);
