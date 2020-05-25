const appDOM = document.getElementById('app');

// versiune - react
const myApp = React.createElement("div", null, "Hello");
// const myApp = (<div>hello</div>)
ReactDOM.render(myApp, appDOM)

// versiune dom
const myApp = document.createElement('div');
myApp.innerHTML = "Hello"
appDOM.appendChild(myApp)





