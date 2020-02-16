import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Footer from '../common/Footer';
import NotFound from '../components/NotFound';
import BarCrawlPage from '../components/BarCrawlPage';
import FeedPage from '../components/FeedPage';
import Header from '../common/Header';
import ModalContainer from "../components/Modal";

const ProtectedRoutes = () => (
	<div>
		{/* header placement */}
		<Header />
		{/* header placement end */}
		{/* https://stackoverflow.com/questions/51796344/how-to-skip-header-and-footer-for-certain-routes-in-reactjs */}
		<Switch>
			<Route exact path="/">
				<Redirect to="/randomizer" />
			</Route>
			<Route exact path="/randomizer">
				{/*<RandomizeScreenContainer />*/}
					<ModalContainer />
			</Route>
			<Route exact path="/barcrawl">
				<BarCrawlPage />
			</Route>
			<Route exact path="/feed">
				{/* news page */}
				<FeedPage />
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
