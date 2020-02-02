import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './ui/common/Footer';
import LoginPageComponent from './ui/components/LoginPage/LoginPageComponent'

class App extends Component {
	render() {
		return (
			<Router>
				{/* header */}
				{/* start header example */}
				<Route path='/login' exact={true}>
					<LoginPageComponent />
				</Route>

				{/* end header example */}
				<Switch>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/randomizer">randomizer</Link>
						</li>
						<li>
							<Link to="/barcrawl">barcrawl</Link>
						</li>
					</ul>
					<Route exact path="/">
						<LoginPageComponent />
						<p>login</p>
					</Route>
					<Route path="/randomizer">
						{/* bar randomizer page */}
						<p>random</p>
					</Route>
					<Route path="/barcrawl">
						{/* barcrawl page */}
						<p>barcrawl</p>
					</Route>
					<Route path="/feed">
						{/* news page */}
						<p>feed</p>
					</Route>
					<Route path="/map">
						{/* map page */}
						<p>map</p>
					</Route>
					<Footer />
				</Switch>

			</Router>
		);
	}
}

export default App;
