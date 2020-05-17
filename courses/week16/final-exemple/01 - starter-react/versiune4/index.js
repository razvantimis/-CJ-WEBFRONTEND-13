class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}
const appDOM = document.getElementById('app');

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  appDOM
);