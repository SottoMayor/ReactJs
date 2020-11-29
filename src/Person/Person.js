import React from 'react';

const person = (props) => {

    // Dynamic content in JSX, we use '{expression}' into JSX.
    return(
        <div>
            <p>I'm {props.name} and I'm {props.age} years old. {props.children}</p>
        </div>
    );

};

export default person;