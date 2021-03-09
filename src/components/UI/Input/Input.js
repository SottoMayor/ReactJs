import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {

    const inputClasses = [classes.InputElement]

    
    if(props.invalid && props.touched){
        inputClasses.push(classes.Invalid)
    }

    let inputElement = null;

    switch (props.elementType){
        case('input'):
            inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} defaultValue={props.value} onChange={props.changed}/>;
            break;
        case('textarea'):
            inputElement = <textarea className={inputClasses.join(' ')} {...props.elementConfig} defaultValue={props.value} onChange={props.changed}/>;
            break;
        case('select'):
        inputElement = <select className={inputClasses.join(' ')} {...props.elementConfig} defaultValue={props.value} onChange={props.changed}>

                            {
                                props.elementConfig.options.map(obj => {
                                    return <option key={obj.value} value={obj.value}> {obj.displayValue} </option>
                                })
                            }

                        </select>;
            break;
        default:
            inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} defaultValue={props.value} onChange={props.changed}/>
    }


    return (
        <div className={classes.Input}>

            <label className={classes.Label}>{props.label}</label>

            {inputElement}

        </div>
    )
}

export default Input;
