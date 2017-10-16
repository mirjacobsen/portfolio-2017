import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './style.css';
import App from './App';
import About from './components/About/About';
import Home from './components/Home/Home';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return (
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </App>
    </Router>
  );
};

render(<Root />, document.getElementById('root'));
registerServiceWorker();
