

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: props.isShow, // false
      title: 'test'
    }
  }

  click = (event) => {
    // event.preventDefault();
    console.log('click ')
    const isShow = this.state.isShow;
    const newState = { isShow: !isShow }
    this.setState(newState)
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

const appDOM = document.getElementById('app');
ReactDOM.render(<App />, appDOM)





