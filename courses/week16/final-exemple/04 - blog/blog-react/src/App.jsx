import React from 'react';
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

class App extends React.Component {


  handleLinkClick = (event) => {
    const { hash } = event.target;
    this.setState({ currentPage: hash })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="header">
            <Link to='/home' className="header-button">Home</Link>
            <Link to='/about' className="header-button">About</Link>
          </header>

          <div className="app-content">
            <Switch>
              <Route path="/home">
                <HomePage />
              </Route>
              <Route path="/about">
                <AboutPage />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
