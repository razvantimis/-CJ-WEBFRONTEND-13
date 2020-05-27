import React from 'react';
import { debounce } from 'lodash';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isShow: props.isShow // false
    }
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
