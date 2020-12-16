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


  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        {name: newName, age: 20},
        {name: 'Victor', age: 22}
      ]
    })
    }

    const changeNameHandler = (event) => {
      setPersonsState({
        persons: [
          {name: event.target.value, age: 20},
          {name: 'Victor', age: 22}
        ]
      })
      }


  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p>This is realy working!</p>
      <button onClick={() => switchNameHandler('Davizim')}>Switch Name</button>
      <Person change={changeNameHandler}
       name={personsState.persons[0].name} age={personsState.persons[0].age}/>  
      <Person  click={() => switchNameHandler('Soltinho')} 
       name={personsState.persons[1].name} age={personsState.persons[1].age}>Hobbies: Racing and play guitar</Person>       
    </div>
    )
}

export default app;
