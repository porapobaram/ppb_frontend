import React from 'react';
// import FbLoginBtn from '../../common/FbLoginButton'

const LoginPageComponent = ({onCallbackHandler}) => {
  return (
      <div>
          <FbLoginBtn callback={onCallbackHandler} />
      </div>
  )
};

export default LoginPageComponent;
