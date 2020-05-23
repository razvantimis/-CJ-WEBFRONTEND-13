import React from 'react';
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: '#home'
    }
  }

  renderPage() {

    const { currentPage } = this.state;

    switch (currentPage) {
      case '#home':
        return (<HomePage></HomePage>)
      case '#about':
        return (<AboutPage></AboutPage>)
      default:
        return (<HomePage></HomePage>)

    }
  }

  handleLinkClick = (event) => {
    event.persist()
    const { hash } = event.target;
    this.setState({ currentPage: hash })
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <a href="#home" className="header-button" onClick={this.handleLinkClick}>Home</a>
          <a href="#about" className="header-button" onClick={this.handleLinkClick}>About</a>
        </header>

        <div className="app-content">
          {this.renderPage()}
        </div>

      </div>
    );
  }
}


export default App;
