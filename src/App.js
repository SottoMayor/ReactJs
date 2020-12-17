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

  const [showPersons, setShowPersons] = useState( {showPersons: false} );

  const togglePersons = () => {
    const doesChange = showPersons.showPersons
    setShowPersons({
      showPersons: !(doesChange)
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

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      margin: '10px 0'
    }

    let persons = null;

    if (showPersons.showPersons){
      persons = (
        <div>

          <Person change={changeNameHandler}
          name={personsState.persons[0].name} age={personsState.persons[0].age}/>  
          <Person 
          name={personsState.persons[1].name} age={personsState.persons[1].age}>Hobbies: Racing and play guitar</Person>

        </div>
      )
    }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p>This is realy working!</p>
      <button style={style} onClick={() => togglePersons()}>Persons toggle</button>

      {persons}
        
    </div>
    )
}

export default app;
