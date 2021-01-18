import React from 'react';

import classes from './Burguer.module.css';

import BurguerIngredient from './BurguerIngredient/BurguerIngredient';

const burguer = props => {

    let transformedIngredients = Object.keys(props.ingredients)
    .map(ingKey => {
       return [...Array(props.ingredients[ingKey])].map((_, index) => {
           return <BurguerIngredient key={ingKey + index} type={ingKey} />
        })
    })
    .reduce((arr, element) => {
        return arr.concat(element)
    }, []);

    if( transformedIngredients.length === 0 ){
        transformedIngredients = <p>Please add some ingredients!</p>
    }

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