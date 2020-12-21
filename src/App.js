import React, { useState } from 'react';
import  classes from './App.css';
import Person from './Person/Person';

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
    let btnClass = ''

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

      btnClass = classes.Red

    }

    const assignedClasses = [];
    if(personsState.persons.length <=2 ){
      assignedClasses.push(classes.red);
    }
    if(personsState.persons.length <= 1){
      assignedClasses.push(classes.bold)
    }


  return (
    <div className={classes.App}>
      <h1>Hello World!</h1>
      <p className={assignedClasses.join(' ')}>This is realy working!</p>
      <button className={btnClass} onClick={() => togglePersons()}>Persons toggle</button>

      {persons}
        
    </div>
    )
}

export default app;
