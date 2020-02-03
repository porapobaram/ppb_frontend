import React from 'react';
import { FacebookLogin } from 'react-facebook-login-component';
import './FbLoginButton.scss';
import LogoFb from './logo-facebook.png';

class LoginButton extends React.Component {
	responseFacebook(response) {
		console.log(response);
	}

	render() {
		return (
			<div className="Login">
				<div className="arrow" />
				<div>
					<img className="logo-facebook" src={LogoFb} alt="" />
				</div>
				<FacebookLogin
					socialId="200279244446400"
					fields="name,email,picture"
					responseHandler={this.responseFacebook}
					version="v3.0"
					className="facebook-login"
					buttonText="Войти через"
				/>
			</div>
		);
	}
}

export default LoginButton;
