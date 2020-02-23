import React, * as react from 'react';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import { ProtectedRoutes } from './ui/routes/ProtectedRoutes';
import { PublicRoutes } from './ui/routes/PublicRoutes';
import NotFound from './ui/components/NotFound';
import { history } from './reduxStore/store';
import cookie from 'react-cookies';
import { setBarEffort, initAllRandomBars } from './reduxStore/bar/actions';

class App extends react.Component {
	componentDidMount() {
		const savedEfforts = Number(cookie.load('effort')) || 1;
		const allRandomBarsLs = localStorage.getItem('allBarsShown');
		const allRandomBarsObj = decodeURI(allRandomBarsLs);

		this.props.initAllRandomBars(JSON.parse(allRandomBarsObj) || []);
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
	initAllRandomBars,
};

export default connect(null, mapDispatchToProps)(App);
