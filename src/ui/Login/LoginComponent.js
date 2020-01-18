import React from "react";

const LoginComponent = ({ testParam, onSetInitialState }) => (
  <div>
    <p>login component: {JSON.stringify(testParam)}</p>
    <button
      onClick={() => {
        onSetInitialState({ LOH: "eban" });
      }}
    >
      test
    </button>
  </div>
);

export default LoginComponent;
