import React from 'react';
import './FeedComponent.scss';
import commentImg from './img/comment.svg';
import LikesComponent from './Likes/LikesComponent';

const FeedComponent = () => {
	return (
		<>
			<div className="container">
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
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure maiores ea vel exercitationem cum
						ipsa debitis nam modi et, voluptatum repudiandae, dignissimos impedit officia vitae nisi libero,
						possimus eaque! Harum!
					</p>
					<img
						src="https://avatars0.githubusercontent.com/u/26659679?s=460&v=4"
						alt="feed img"
						className="feed-img"
					/>
					<div className="feed-back">
						<LikesComponent />
						<img className="feed-back-toggle " src={commentImg} alt="" />
					</div>
				</div>
			</div>
		</>
	);
};

export default FeedComponent;
