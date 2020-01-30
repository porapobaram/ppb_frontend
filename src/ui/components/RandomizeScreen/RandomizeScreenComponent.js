import React from "react";

const ButtonComponent = () => {
  const clickFunc = () => {
    console.log("Fetch was here!!!");
  };

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

export default ButtonComponent;

// import React from "react";
// const LoginPageComponent = ({ onCallbackHandler }) => {
//   return (
//     <div>
//       <FbLoginBtn callback={onCallbackHandler} />
//     </div>
//   );
// };

// export default LoginPageComponent;
