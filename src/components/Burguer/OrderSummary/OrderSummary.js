import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary';

import Button from '../../UI/Button/Button';

const orderSummary = props => {

    const ingredientSummary = Object.keys(props.ingredients)
    .map(ingKey => {
        return <li key={ingKey}> <span style={{textTransform: 'capitalize'}} > {ingKey} :</span> {props.ingredients[ingKey]} </li>
    })

    return(
        <Auxiliary>

            <h3>Your Order</h3>

            <p>A delicious burguer in the following ingredients:</p>

            <ul>
                {ingredientSummary}
            </ul>

            <p><strong>The total price</strong>: {props.price.toFixed(2)}</p>

            <p>Continue to Checkout?</p>

            <Button btnType="Danger" clicked={props.purchaseCancelled} >Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>

        </Auxiliary>    
    );
}

export default orderSummary;