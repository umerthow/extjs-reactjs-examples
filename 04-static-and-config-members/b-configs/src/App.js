import React, { Component } from 'react';
import Foo from './Foo';
import logo from './logo.svg'
import './App.css';

const instance = new Foo({
  foo : 'bar'
});
let value = instance.foo; // would be [ 'bar' ]
console.log('value', value);
instance.foo = 'foobar';
value = instance.foo; // would be [ 'foobar' ]
console.log('value', value);


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
