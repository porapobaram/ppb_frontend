import React from 'react';
import './LoginPageComponent.scss';
import FbLoginButton from './FbLoginButton';
import Logo from './logo-ppb.png';
import DotsParallax from './DotsParallax';
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
class LoginPageComponent extends React.Component {
	render() {
		return (
			<div className="Wrapper">
				<DotsParallax />
				<div>
					<img className="logo" src={Logo} alt="" />
				</div>
				<div>
					<FbLoginButton />
				</div>
			</div>
		);
	}
}

export default LoginPageComponent;
