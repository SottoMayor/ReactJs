import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
      persons: [
        {name: 'David', age: 20},
        {name: 'Walter', age: 23}
      ]
  }

  switchNameHandler = () => {
    console.log('Clicked!')
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
