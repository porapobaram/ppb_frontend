import React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import Footer from '../common/Footer';
import NotFound from '../components/NotFound';

const ProtectedRoutes = () => (
	<div>
		{/* header placement */}
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
		{/* header placement end */}
		<Switch>
			<Route exact path="/">
				<Redirect to="/randomizer" />
			</Route>
			<Route exact path="/randomizer">
				{/* bar randomizer page */}
				<p>random</p>
			</Route>
			<Route exact path="/barcrawl">
				{/* barcrawl page */}
				<p>barcrawl</p>
			</Route>
			<Route exact path="/feed">
				{/* news page */}
				<p>feed</p>
			</Route>
			<Route exact path="/map">
				{/* map page */}
				<p>map</p>
			</Route>
			<Route component={NotFound} />
		</Switch>
		<Footer />
	</div>
);

export { ProtectedRoutes };
