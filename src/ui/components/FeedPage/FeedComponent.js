import React from 'react';
import './FeedComponent.scss';

const FeedComponent = () => {
	return (
		<>
			<div className="wrapper">
				<div className="feed-bar">
					<img
						src="https://avatars0.githubusercontent.com/u/26659679?s=460&v=4"
						alt="logo bar"
						className="logo-bar"
					/>
					<div className="feed-account">
						<h4 className="name-bar">Dogs & Tails</h4>
						<div className="feed-time">10 min</div>
					</div>
				</div>
				<p className="feed-about">
					Сегодня мы не танцуем, но пробуем новый зеленый дип с овощами и слушаем легкий сет с винила .
				</p>
				<img
					src="https://avatars0.githubusercontent.com/u/26659679?s=460&v=4"
					alt="feed img"
					className="feed-img"
				/>
				<div className="feed-back">
					<i className="fas fa-thumbs-up" />
					<i className="fas fa-comment-dots" />
					<i className="fas fa-heart" />
				</div>
			</div>
		</>
	);
};

export default FeedComponent;