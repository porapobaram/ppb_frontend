import React, * as react from 'react';
import { Provider, connect } from 'react-redux';
import { func } from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import { ProtectedRoutes } from './ui/routes/ProtectedRoutes';
import { PublicRoutes } from './ui/routes/PublicRoutes';
import NotFound from './ui/components/NotFound';
import configureStore, { history } from './reduxStore/store';
import { getBarEffortCookies } from './reduxStore/bar/actions';

const propTypes = {
	getBarEffort: func,
};

class App extends react.Component {
	componentDidMount() {
		this.props.getBarEffort();
	}

	render() {
		const store = configureStore({});
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<Switch>
						<Route exact path="/login" component={PublicRoutes} />
						<Route path="/" component={ProtectedRoutes} />
						<Route component={NotFound} />
					</Switch>
				</ConnectedRouter>
			</Provider>
		);
	}
}

App.propTypes = propTypes;

const mapDispatchToProps = {
	getBarEffort: getBarEffortCookies,
};

export default connect(null, mapDispatchToProps)(App);
