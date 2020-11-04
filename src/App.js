import React, {Component} from 'react';
import 'boostrap/package.json';
import {BrowserRouter as Router,Switch,Route, Link} from 'react-router-dom';
//dsd
import Create from './component/create.component';
import Edit from './component/edit.component';
import Index from './component/index.component';

class App extends Component {
  render() {
    return(
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">React CRUD Example</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <Switch>
          <Route exact path='/create' component={Create}/>
        </Switch>
      </Router>
    );
  }
}

export default App;