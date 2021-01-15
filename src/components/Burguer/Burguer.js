import React from 'react';

import classes from './Burguer.module.css';

import BurguerIngredient from './BurguerIngredient/BurguerIngredient';

const burguer = props => {

    const transformedIngredients = Object.keys(props.ingredients)
    .map(ingKey => {
       return [...Array(props.ingredients[ingKey])].map((_, index) => {
           return <BurguerIngredient key={ingKey + index} type={ingKey} />
        })
    })

    return(
        <div className={classes.Burguer}>
            <BurguerIngredient type='bread-top' />
            {
                transformedIngredients
            }
            <BurguerIngredient type='bread-bottom' />

        </div>
    );

};

export default burguer;