import React from 'react';

const RandomizeScreenComponent = () => {
  return (
    <div className="button_wrapper">
      <div className="button_container">
        <button className="button" onClick={clickFunc}>
          Пора!
        </button>
      </div>
    </div>
  );
};

export default RandomizeScreenComponent;

// import React from "react";
// const LoginPageComponent = ({ onCallbackHandler }) => {
//   return (
//     <div>
//       <FbLoginBtn callback={onCallbackHandler} />
//     </div>
//   );
// };

// export default LoginPageComponent;
