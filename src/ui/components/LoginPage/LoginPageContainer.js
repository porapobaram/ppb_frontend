import React, { Component } from 'react';
import LoginPageComponent from './LoginPageComponent'
// Class HOC, which returns modificated component

class LoginPageContainer extends Component {
    constructor(props) {
        super(props);
        this.onCallbackHandler = this.onCallbackHandler.bind(this);
    }

    //here is logic
    onCallbackHandler(params) {
        console.log(params);
    }

    render() {
        return (
            <LoginPageComponent onCallbackHandler={this.onCallbackHandler} />
        )
    }
}

export default LoginPageContainer;