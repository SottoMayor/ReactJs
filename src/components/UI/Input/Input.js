import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {

    let inputElement = null;

    switch (props.elementType){
        case('input'):
            inputElement = <input className={classes.InputElement} {...props.elementConfig} defaultValue={props.value}/>;
            console.log(props)
            break;
        case('textarea'):
            inputElement = <textarea className={classes.InputElement} {...props.elementConfig} defaultValue={props.value}/>;
            break;
        default:
            inputElement = <input className={classes.InputElement} {...props.elementConfig} defaultValue={props.value}/>
    }


    return (
        <div className={classes.Input}>

            <label className={classes.Label}>{props.label}</label>

            {inputElement}

        </div>
    )
}

export default Input;
