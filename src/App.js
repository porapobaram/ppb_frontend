/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import { ProtectedRoutes } from './ui/routes/ProtectedRoutes';
import { PublicRoutes } from './ui/routes/PublicRoutes';
import NotFound from './ui/components/NotFound';
import configureStore, { history } from './reduxStore/store';
import WindowSizeHandler from './service/helpers/WindowSizeHandler';

// eslint-disable-next-line react/prefer-stateless-function

class App extends Component {
	render() {
		const store = configureStore({});
		return (
			<div>
				<Provider store={store}>
					<ConnectedRouter history={history}>
						<WindowSizeHandler>
							<Switch>
								<Route exact path="/login" component={PublicRoutes} />
								<Route path="/" component={ProtectedRoutes} />
								<Route component={NotFound} />
							</Switch>
						</WindowSizeHandler>
					</ConnectedRouter>
				</Provider>
			</div>
		);
	}
}

export default App;
