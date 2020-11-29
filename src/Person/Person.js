import React from 'react';

const person = (props) => {

    // Dynamic content in JSX, we use '{expression}' into JSX.
    return(
    <p>I'm {props.name} and I'm {props.age} years old.</p>
    );

};

export default person;