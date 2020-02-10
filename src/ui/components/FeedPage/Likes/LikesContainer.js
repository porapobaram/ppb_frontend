import React, { Component } from 'react';

class LikesContainer extends Component {
	constructor() {
		super();

		this.state = {
			likes: 1,
			updated: false,
		};
	}

	updateLikes() {
		const { likes, updated } = this.state;
		if (!updated) {
			this.setState((prevState, props) => {
				return {
					likes: prevState.likes + 1,
					updated: true,
				};
			});
		} else {
			this.setState((prevState, props) => {
				return {
					likes: prevState.likes - 1,
					updated: false,
				};
			});
		}
	}

	render() {
		return <LikesContainer />;
	}
}

export default LikesContainer;
