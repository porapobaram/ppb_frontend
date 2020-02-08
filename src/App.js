import React, * as react from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProtectedRoutes } from './ui/routes/ProtectedRoutes';
import { PublicRoutes } from './ui/routes/PublicRoutes';
import { ConnectedRouter } from 'connected-react-router';
import NotFound from './ui/components/NotFound';
import configureStore, { history } from './reduxStore/store';

class App extends react.Component {
	render() {
		const store = configureStore();
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<Router>
						<Switch>
							<Route exact path="/login" component={PublicRoutes} />
							<Route path="/" component={ProtectedRoutes} />
							<Route component={NotFound} />
						</Switch>
					</Router>
				</ConnectedRouter>
			</Provider>
		);
	}
}

export default App;
