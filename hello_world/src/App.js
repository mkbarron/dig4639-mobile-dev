import React from 'react';
import logo from './logo.svg';
import './App.css';
function NameBadge (prop) {
  return (
    <p>The sum is (10 +10)</p>
  )
}

/*
class NameBadge extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <p>The sum is {10 +10}</p>
    )
  }
}
*/
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NameBadge name = "John"/>
        <h1>
          Hello World
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}
}
export default App;
