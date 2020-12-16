import React from 'react';

import './Person.css';

const person = (props) => {

    // Dynamic content in JSX, we use '{expression}' into JSX.
    return(
        <div className='Person'>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old. {props.children}</p>

            <input type='text' onChange={props.change} value={props.name} />
        </div>
    );

};

export default person;