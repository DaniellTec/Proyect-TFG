import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './pages/about';
import Artists from './pages/artists';
import Art from './pages/art';
import CommingSoon from './pages/comming';
import Designs from './pages/designs';
import Events from './pages/events';
import Test from './pages/test';
import Try from './pages/try';
import Login from './pages/login';
import Sign from './pages/sign';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/about' component={About} />
        <Route path ='/artists' component={Artists}/>
        <Route path ='/art' component={Art}/>
        <Route path ='/comming' component={CommingSoon}/>
        <Route path ='/designs' component={Designs}/>
        <Route path ='/events' component={Events}/>
        <Route path ='/test' component={Test}/>
        <Route path ='/try' component={Try}/>
        <Route path ='/login' component={Login}/>
        <Route path ='/sign' component={Sign}/>
      </Switch>
    </Router>
  );
}

export default App;
