import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import Home from './Home/Home.js';
import Store from './Store/Store.js';
import Game from './Game/Game.js';
require('./App.css');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  render() {
    return (
      <Router>
        <div>
          <Menu
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}>
            <Link to="/" onClick={() => this.closeMenu()} className="menu-item">Home</Link>
            <Link to="/store" onClick={() => this.closeMenu()} className="menu-item">Store</Link>
            <Link to="/game" onClick={() => this.closeMenu()} className="menu-item">Game</Link>
          </Menu>
          <div className="page-wrap">
            <Route exact path="/" component={Home} />
            <Route exact path="/store" component={Store} />
            <Route exact path="/game" component={Game} />
          </div>
        </div>
      </Router>
    );
  }
}

