import React from 'react';
import './LikesComponent.scss';
import likeImg from './img/like.svg';
import { updateLikes, likes } from 'prop-types';

const LikesComponent = () => {
	return (
		<div className="wrapper-like-toggle">
			<img className="feed-back-toggle" onClick={updateLikes} src={likeImg} alt="" />
			<p>{likes}</p>
		</div>
	);
};

export default LikesComponent;
