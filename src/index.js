import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './reduxStore/store';
// import App from './App';
import NotFound from './ui/components/NotFound';
import './ui/styles/reset.scss';

const store = configureStore({});

ReactDOM.render(
	<Provider store={store}>
		<NotFound />
	</Provider>,
	document.getElementById('root')
);
