import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

  const [personsState, setPersonsState] = 
      useState ({
      persons: [
        {name: 'David', age: 20},
        {name: 'Walter', age: 23}
      ]
    })

    const [otherState, setOtherState] = 
      useState ('I\'m other state!')

    console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: 'David', age: 20},
        {name: 'Victor', age: 22}
      ]
    })
    }


  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p>This is realy working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>  
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Hobbies: Racing and play guitar</Person>       
    </div>
    )
}

export default app;
