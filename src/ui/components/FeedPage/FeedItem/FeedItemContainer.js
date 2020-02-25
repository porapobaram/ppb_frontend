/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import FeedItemComponent from './FeedItemComponent';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { openModal } from '../../../../reduxStore/modal/actions';

const propTypes = {
	openModal: func,
};

class FeedItemContainer extends Component {
	constructor(props) {
		super(props);
		this.onClickHandler = this.onClickHandler.bind(props);
	}

	onClickHandler = () => {
		const { comments } = this.props.newsItem;
		this.props.openModal('COMMENTS_MODAL', comments);
	};

	render() {
		return <FeedItemComponent onClickHandler={this.onClickHandler} newsItem={this.props.newsItem} />;
	}
}

FeedItemComponent.propTypes = propTypes;

const mapDispatchToProps = {
	openModal,
};

export default connect(null, mapDispatchToProps)(FeedItemContainer);
