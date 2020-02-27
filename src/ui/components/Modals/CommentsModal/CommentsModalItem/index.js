import React from 'react';
import './commentsItem.styles.scss';

const CommentsModalItem = ({ item }) => {
	const { userName, userComment, userPic } = item;
	return (
		<div className="modalItem-container">
			<div className="modalItem-userPic-container">
				<img src={userPic} alt="userPic" className="modalItem-userPic" />
			</div>
			<div className="modalItem-userText-container">
				<h2 className="modalItem-userName">{userName}</h2>
				<p className="modalItem-userComment">{userComment}</p>
			</div>
		</div>
	);
};

export default CommentsModalItem;
