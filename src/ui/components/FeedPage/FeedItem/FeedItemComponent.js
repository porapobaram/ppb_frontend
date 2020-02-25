import React from 'react';
import LikesComponent from '../Likes';
import commentImg from '../img/comment.svg';
import '../FeedComponent.scss';

const FeedItemComponent = ({ newsItem, index, onClickHandler }) => {
	const { accountName, postTime, iconImage, postText, postPhoto, likes } = newsItem;

	return (
		<div className="wrapper">
			<div className="feed-bar">
				<img src={iconImage} alt="logo bar" className="logo-bar" />
				<div className="feed-account">
					<h4 className="name-bar">{accountName}</h4>
					<div className="feed-time">{postTime}</div>
				</div>
			</div>
			<p className="feed-about">{postText}</p>
			<img src={postPhoto} alt="feed img" className="feed-img" />
			<div className="feed-back">
				<LikesComponent index={index} likes={likes} />
				<img onClick={onClickHandler} className="feed-back-toggle " src={commentImg} alt="" />
			</div>
		</div>
	);
};

export default FeedItemComponent;
