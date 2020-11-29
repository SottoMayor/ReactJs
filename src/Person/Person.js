import React from 'react';

const person = () => {

    // Dynamic content in JSX, we use '{expression}' into JSX.
    return(
        <p>I'm a person! My name is David and my age is {Math.floor(Math.random() * 100)} years.</p>
    );

};

export default person;