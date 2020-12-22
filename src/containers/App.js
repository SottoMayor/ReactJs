import React, { useState } from 'react';
import  classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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


    let persons = null;

    if (showPersons.showPersons){
      persons = 
      (
        <div>

          <Persons persons={personsState.persons} clicked={deletePerson} changed={changeNameHandler} />

        </div>
      )

    }


  return (
    <div className={classes.App}>
      
      <Cockpit showPersons={showPersons.showPersons} persons={personsState.persons} toggled={togglePersons} />

      {persons}
        
    </div>
    )
}

export default app;
