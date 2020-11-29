import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
      persons: [
        {name: 'David', age: 20},
        {name: 'Walter', age: 23}
      ],
      otherState: 'I\'m other state!'
      //the otherState will be preserved, when persons will be merged!
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: 'David', age: 20},
        {name: 'Victor', age: 22}
      ]
    })

    // Error!!!! if -> this.state.persons[1].name = 'Victor'
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <p>This is realy working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>  
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: Racing and play guitar</Person>       
      </div>
    );
  }
}

export default App;
