import React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import Footer from '../common/Footer';
import NotFound from '../components/NotFound';
import BarCrawlPage from '../components/BarCrawlPage';
import FeedPage from '../components/FeedPage';
import RandomBar from '../components/BarPage/BarPageContainer';
// import RandomizeScreenContainer from "../components/RandomizeScreen/RandomizeScreenContainer";

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
		{/* https://stackoverflow.com/questions/51796344/how-to-skip-header-and-footer-for-certain-routes-in-reactjs */}
		<Switch>
			<Route exact path="/">
				<Redirect to="/randomizer" />
			</Route>
			<Route exact path="/randomizer">
				<RandomBar />
				{/* <RandomizerPage /> */}
				{/* <p>random</p> */}
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

		<Route path="/" render={props => props.location.pathname !== '/randomizer' && <Footer />} />
	</div>
);

export { ProtectedRoutes };
