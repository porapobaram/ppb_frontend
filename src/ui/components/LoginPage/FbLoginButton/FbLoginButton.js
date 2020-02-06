import React, { Component } from 'react';
import { FacebookLogin } from 'react-facebook-login-component';
import './FbLoginButton.scss';

class LoginButton extends Component {
	responseFacebook(response) {
		console.log(response);
	}

	render() {
		return (
			<div className="Login">
				<div className="button-container">
					<div>
						<div className="arrow" />
						<span className="facebook-text">Войти через</span>
						<span className="facebook-logo-text">facebook</span>
					</div>
					<FacebookLogin
						socialId="200279244446400"
						fields="name,email,picture"
						responseHandler={this.responseFacebook}
						version="v3.0"
						className="facebook-login"
					/>
				</div>
			</div>
		);
	}
}

export default LoginButton;
