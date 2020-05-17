class HelloMessage extends React.Component {
  render() {
    return React.createElement("div", null, "Hello ", this.props.name);
  }
}

const appDOM = document.getElementById('app');
const mainApp = React.createElement(HelloMessage, {
  name: "Taylor"
})

ReactDOM.render(mainApp, appDOM);