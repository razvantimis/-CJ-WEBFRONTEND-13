const appDOM = document.getElementById('app');

// versiune - react
const myApp = React.createElement("div", null, "Hello");

ReactDOM.render(myApp, appDOM)

// versiune dom
const myApp = document.createElement('div');
myApp.innerHTML = "Hello"
appDOM.appendChild(myApp)





