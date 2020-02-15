import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Footer from '../common/Footer';
import NotFound from '../components/NotFound';
import BarCrawlPage from '../components/BarCrawlPage';
import FeedPage from '../components/FeedPage';
import Header from '../common/Header';
import RandomizeScreenContainer from '../components/RandomizeScreen/RandomizeScreenContainer';
import BarPage from '../components/BarPage';
import MapPage from '../components/Maps';

const ProtectedRoutes = () => (
	<div>
		{/* header placement */}
		{window.location.pathname !== '/barPage' ? <Header /> : null}
		{/* header placement end */}
		{/* https://stackoverflow.com/questions/51796344/how-to-skip-header-and-footer-for-certain-routes-in-reactjs */}
		<Switch>
			<Route exact path="/">
				<Redirect to="/randomizer" />
			</Route>
			<Route exact path="/randomizer">
				<RandomizeScreenContainer />
			</Route>
			<Route exact path="/barPage">
				<BarPage />
			</Route>
			<Route exact path="/barcrawl">
				<BarCrawlPage />
			</Route>
			<Route exact path="/feed">
				{/* news page */}
				<FeedPage />
			</Route>
			<Route exact path="/map">
				<MapPage />
			</Route>
			<Route component={NotFound} />
		</Switch>
		{window.location.pathname !== '/barPage' ? <Footer /> : null}
	</div>
);

export { ProtectedRoutes };
