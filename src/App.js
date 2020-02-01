import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import RandomizeScreenContainer from './ui/components/RandomizeScreen';

class App extends Component {
  render() {
    return (
      <Router>
        {/*header*/}
        {/*start header example*/}
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
        {/*end header example*/}
        <Switch>
          <Route exact path="/">
            {/*login page*/}
            <p>login</p>
          </Route>
          <Route path="/randomizer">
            <RandomizeScreenContainer />
            <p>random</p>
          </Route>
          <Route path="/barcrawl">
            {/*barcrawl page*/}
            <p>barcrawl</p>
          </Route>
          <Route path="/feed">
            {/*news page*/}
            <p>feed</p>
          </Route>
          <Route path="/map">
            {/*map page*/}
            <p>map</p>
          </Route>
        </Switch>
        {/*footer*/}
      </Router>
    );
  }
}

export default App;
