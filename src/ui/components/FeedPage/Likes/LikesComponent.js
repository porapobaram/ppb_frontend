import React from 'react';
import './LikesComponent.scss';
import likeImg from './img/like.svg';
import { func, number } from 'prop-types';

const propTypes = {
	likes: number,
	updateLikes: func,
};

const LikesComponent = ({ likes, onLikeClick, index }) => {
	return (
		<div className="wrapper-like-toggle">
			<img className="feed-back-toggle" onClick={() => onLikeClick(index, likes)} src={likeImg} alt="" />
			<p>{likes}</p>
		</div>
	);
};

LikesComponent.propTypes = propTypes;

export default LikesComponent;
