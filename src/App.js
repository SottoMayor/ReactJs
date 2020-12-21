import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const app = props => {

  const [personsState, setPersonsState] = 
      useState ({
      persons: [
        {name: 'David', age: 20, id:'person1'},
        {name: 'Walter', age: 23, id:'person2'}
      ]
    })

  const [showPersons, setShowPersons] = useState( {showPersons: false} );

  const togglePersons = () => {
    const doesChange = showPersons.showPersons
    setShowPersons({
      showPersons: !(doesChange)
    })
    }

  const changeNameHandler = (event, id) => {

    const personIndex = personsState.persons.findIndex( person => {
      return person.id === id;
    });

    const person = {
      ...personsState.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...personsState.persons]; 

    persons[personIndex] = person; 

    setPersonsState({
      persons: persons
    })
  }

  const deletePerson = (index) => {
    // Good practice: create a array copy and work with it...

    const persons = [...personsState.persons];
    persons.splice(index, 1)
    setPersonsState({
      persons: persons
    })
  }

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      margin: '10px 0'
    }

    const StyledButton = styled.button`
      background-color: ${props => props.alt ? 'red' : 'green'};
      color: white;
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;
      margin: 10px 0;

      &:hover {
        background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
        color: black;
      }
    `;

    let persons = null;

    if (showPersons.showPersons){
      persons = 
      (
        <div>

          {
            personsState.persons.map( (person, index) => {
              return < Person key={person.id} name={person.name} 
              age={person.age} click={() => deletePerson(index)} change={(event) => changeNameHandler(event, person.id)} />
            })
          }

        </div>
      )

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }

    }

    const classes = [];
    if(personsState.persons.length <=2 ){
      classes.push('red');
    }
    if(personsState.persons.length <= 1){
      classes.push('bold')
    }


  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p className={classes.join(' ')}>This is realy working!</p>
      <StyledButton alt={showPersons.showPersons} onClick={() => togglePersons()}>Persons toggle</StyledButton>

      {persons}
        
    </div>
    )
}

export default app;
