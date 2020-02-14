import React, { Component } from 'react';
import LikesComponent from './LikesComponent';
import { updateLikeCounter } from '../../../../reduxStore/news/actions';
import { connect } from 'react-redux';

class LikesContainer extends Component {
	constructor(props) {
		super(props);
		this.onLikeClick = this.onLikeClick.bind(this);
	}

	onLikeClick(index, likesCount) {
		this.props.updateLikeCounter(index, likesCount);
	}

	render() {
		return <LikesComponent likes={this.props.likes} index={this.props.index} onLikeClick={this.onLikeClick} />;
	}
}

const mapDispatchToProps = {
	updateLikeCounter,
};

export default connect(null, mapDispatchToProps)(LikesContainer);
