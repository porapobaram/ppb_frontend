import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './ui/common/Footer';
import Header from './ui/common/Header';

class App extends Component {
	render() {
		return (
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						{/* login page */}
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
				</Switch>
				<Footer />
			</Router>
		);
	}
}

export default App;
