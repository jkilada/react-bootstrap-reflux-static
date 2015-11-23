import 'babel/polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link } from "react-router";
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import Layout from './components/Layout';
import Index from "./pages/index";

// Put central app logic here as this component will always be loaded.
class App extends Component {
  render() {
      return this.props.children;
  }
}

//<Route path="login" component={YOUR-LOGIN-COMPONENT}/>
function requireAuth(nextState, replaceState) {
  // Implement session validity check here.
  /* if (!cookie("sessionId"))
    replaceState({nextPathname: nextState.location.pathname}, "/login"); */
}

//<Route path="logout" onEnter={logout}/>
function logout(nextState, replaceState) {
  // Implement session clearing here.
  /* if (canUseDOM) {
    cookie("sessionId", "");
  }
  replaceState({nextPathname: nextState.location.pathname}, "/login"); */
}

function run() {
  const container = document.getElementById('app');
  ReactDOM.render((
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={Index} onEnter={requireAuth}/>
      </Route>
    </Router>), container);
}

if (canUseDOM) {
  // Run the application when both DOM is ready and page content is loaded
  if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
    run();
  } else {
    document.addEventListener('DOMContentLoaded', run, false);
  }
}
