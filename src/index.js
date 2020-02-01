import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './reduxStore/store';
import App from './App';
import './ui/styles/reset.scss';

const store = configureStore({});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
>>>>>>> ca0b92911eed3fdbc2d03f1395d39e548e3c3aa5
);
