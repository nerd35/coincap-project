import React from "react";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import {
  TopnavBar,
  TableSection,
  SingleTableSection,
  Exchange
} from "./components";

import store from "./redux/store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <TopnavBar />
          <Router>
            <Route exact path="/" component={TableSection} />
            <Route exact path="/:id" component={SingleTableSection} />
            <Route exact path="/exchange" component={Exchange} />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
