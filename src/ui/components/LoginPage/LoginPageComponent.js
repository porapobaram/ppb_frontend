import React, { Component } from 'react';
import './LoginPageComponent.scss';
import FbLoginButton from './FbLoginButton';
import Logo from './logo-ppb.png';
import Dots from './dots.png';

// import FbLoginBtn from '../../common/FbLoginButton'

// const LoginPageComponent = ({onCallbackHandler}) => {
//   return (
//       <div>
//           <FbLoginBtn callback={onCallbackHandler} />
//       </div>
//   )
// };

// export default LoginPageComponent;

// eslint-disable-next-line react/prefer-stateless-function
class LoginPageComponent extends Component {
	render() {
		return (
			<div className="Wrapper">
				<div className="logo">
					<img className="logo-img" src={Logo} alt="Logo" />
					<img className="dots-img" src={Dots} alt="Dots" />
				</div>
				<div>
					<FbLoginButton />
				</div>
			</div>
		);
	}
}

export default LoginPageComponent;
