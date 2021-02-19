import React from 'react';

import classes from './Order.module.css'

const order = (props) => {

    const ingredients = [];

    for (let ingKey in props.ingredients){
        ingredients.push({amount: props.ingredients[ingKey], name: ingKey})
    }

    const ingredientsOutput = ingredients.map( ing => {
        return <span key={ing.name}
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}
        > {ing.name} ({ing.amount}) </span>
    })

    return (
        <div className={classes.Order}>
            
            <p>Ingredients: {ingredientsOutput}</p>

            <p>Price: <strong>{(+props.price).toFixed(2)}</strong></p>

        </div>
    )
}

export default order;
