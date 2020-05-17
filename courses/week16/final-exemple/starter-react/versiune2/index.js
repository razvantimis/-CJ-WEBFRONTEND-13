const HelloMessage = (props) => {
  console.log(props)
  return React.createElement("div", null, "Hello ", props.name);
}

const appDOM = document.getElementById('app');
const mainApp = React.createElement(HelloMessage, {
  name: "Taylor"
})

ReactDOM.render(mainApp, appDOM);