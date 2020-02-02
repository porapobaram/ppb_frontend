import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPageComponent from '../components/LoginPage/LoginPageComponent';

const PublicRoutes = () => (
	<div>
		<Switch>
			<Route exact path="/login">
				<LoginPageComponent />
			</Route>
		</Switch>
	</div>
);

export { PublicRoutes };
