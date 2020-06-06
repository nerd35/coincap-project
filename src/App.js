import React from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { TopnavBar, TableSection, HistoryChart } from './components';

import store from './store';

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<TopnavBar />
					<Router>
					<Route  exact path='/' component={TableSection}/>
					<Route  exact path='/chart' component={HistoryChart}/>
					</Router>
				</div>
			</Provider>
		);
	}
}

export default App;
