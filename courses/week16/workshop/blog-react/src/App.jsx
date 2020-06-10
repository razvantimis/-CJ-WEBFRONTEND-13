import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { HomePage } from './pages/HomePage';
import { AboutPage } from "./pages/AboutPage";

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <header>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </header>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>

          <Route path="/about">
            <AboutPage></AboutPage>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
