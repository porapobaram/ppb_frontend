import React, { Component } from 'react';
import LikesComponent from './LikesComponent';
import { updateLikeCounter } from '../../../../reduxStore/news/actions';
import { connect } from 'react-redux';
import { func } from 'prop-types';

const propTypes = {
	updateLikeCounter: func,
};

class LikesContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			liked: false,
		};

		this.onLikeClickHandler = this.onLikeClickHandler.bind(this);
	}

	onLikeClickHandler(index, likesCount) {
		const { liked } = this.state;
		const { updateLikeCounter } = this.props;
		if (liked || liked === true) {
			console.log('liked');
			this.setState({ liked: false });
			updateLikeCounter(index, likesCount - 1);
			console.log(likesCount, liked);
		} else if (liked === undefined || liked === false) {
			console.log('not liked');
			this.setState({ liked: true });
			updateLikeCounter(index, likesCount + 1);
			console.log(likesCount, liked);
		}
		// this.props.updateLikeCounter(index, likesCount);
		console.log(index, likesCount);
	}

	render() {
		return (
			<LikesComponent
				likes={this.props.likes}
				index={this.props.index}
				onLikeClick={this.onLikeClickHandler}
				liked={this.state.liked}
			/>
		);
	}
}

LikesContainer.propTypes = propTypes;

const mapDispatchToProps = {
	updateLikeCounter,
};

export default connect(null, mapDispatchToProps)(LikesContainer);
