import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProtectedRoutes } from './ui/routes/ProtectedRoutes';
import { PublicRoutes } from './ui/routes/PublicRoutes';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/login" component={PublicRoutes} />
					<Route path="/" component={ProtectedRoutes} />
				</Switch>
			</Router>
		);
	}
}

export default App;
