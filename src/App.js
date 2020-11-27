import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      //OBS 'class' in JSX do not exist! But exist 'className'.
      <div className="App">
        <h1>Hello World!</h1>
        <p>This is realy working!</p>
      </div>
      //<p>This is not working!!!!</p>
    );
  }
}

export default App;
