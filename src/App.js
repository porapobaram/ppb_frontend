import React, * as react from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProtectedRoutes } from './ui/routes/ProtectedRoutes';
import { PublicRoutes } from './ui/routes/PublicRoutes';
import NotFound from './ui/components/NotFound';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/login" component={PublicRoutes} />
					<Route path="/" component={ProtectedRoutes} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		);
	}
}

export default App;
