import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      // In this form the code is much maintainable and reusable and configurable!! Amazing...
      <div className="App">
        <h1>Hello World!</h1>
        <p>This is realy working!</p>
        <Person/>
        <Person/>
        <Person/>
        <Person/>        
      </div>
    );
  }
}

export default App;
