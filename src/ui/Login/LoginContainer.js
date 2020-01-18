import React, { useState } from "react";
import { connect } from "react-redux";
import LoginComponent from "./LoginComponent";
import { setInitialState } from "../../reduxStore/app/actions";

const LoginContainer = ({ testParam, setInitialState }) => {
  return (
    <LoginComponent testParam={testParam} onSetInitialState={setInitialState} />
  );
};

function mapStateToProps(state) {
  return {
    testParam: state.app.testParam
  };
}

const mapDispatchToProps = {
  setInitialState
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

//hoc logica
