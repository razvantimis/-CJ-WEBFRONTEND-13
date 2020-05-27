import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isShow: props.isShow // false
    }
    // this.fetchApi = new FetchApi();
  }

  click = (event) => {
    // event.preventDefault();
    console.log('click ')
    const isShow = this.state.isShow;
    this.setState({ isShow: !isShow })
  }

  render() {
    const isShow = this.state.isShow;

    return (
      <div className="App" onClick={this.click}>
        {isShow ? 'este afisat' : ' nu este afisat'}
      </ div>
    );
  }
}

export default App;
