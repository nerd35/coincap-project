import React from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { Provider } from 'react-redux';


import { TopnavBar, MarketcapNav, TableSection } from './components';

import store from './store'

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<TopnavBar />
					<MarketcapNav />
					<TableSection />
				</div>
			</Provider>
		);
	}
}

export default App;
