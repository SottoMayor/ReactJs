import React, { Component } from 'react';

import Auxiliary from '../../../hoc/Auxiliary';

import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    //this does not have be a class component, could be a functional component!
    componentDidUpdate(){
        console.log('[ORDER SUMMARY] - Will Update!')
    }
    
    render() {

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(ingKey => {
            return <li key={ingKey}> <span style={{textTransform: 'capitalize'}} > {ingKey} :</span> {this.props.ingredients[ingKey]} </li>
        })

        return(
            <Auxiliary>

                <h3>Your Order</h3>

                <p>A delicious burguer in the following ingredients:</p>

                <ul>
                    {ingredientSummary}
                </ul>

                <p><strong>The total price</strong>: {this.props.price.toFixed(2)}</p>

                <p>Continue to Checkout?</p>

                <Button btnType="Danger" clicked={this.props.purchaseCancelled} >Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>

            </Auxiliary>    
        );

    }
}

export default OrderSummary;