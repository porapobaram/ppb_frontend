import React, * as react from 'react';
import { connect, Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import { ProtectedRoutes } from './ui/routes/ProtectedRoutes';
import { PublicRoutes } from './ui/routes/PublicRoutes';
import NotFound from './ui/components/NotFound';
import { history } from './reduxStore/store';
import cookie from 'react-cookies';
import { setBarEffort } from './reduxStore/bar/actions';

// eslint-disable-next-line react/prefer-stateless-function
class App extends react.Component {
	componentDidMount() {
		const savedEfforts = Number(cookie.load('effort')) || 1;
		this.props.setBarEffort(savedEfforts);
	}

	render() {
		return (
			<ConnectedRouter history={history}>
				<Switch>
					<Route exact path="/login" component={PublicRoutes} />
					<Route path="/" component={ProtectedRoutes} />
					<Route component={NotFound} />
				</Switch>
			</ConnectedRouter>
		);
	}
}

const mapDispatchToProps = {
	setBarEffort,
};

export default connect(null, mapDispatchToProps)(App);
