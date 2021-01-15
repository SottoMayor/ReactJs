import React, { Component } from 'react'

import Auxiliary from '../../hoc/Auxiliary';

import Burguer from '../../components/Burguer/Burguer';

import BuildControls from '../../components/Burguer/BuildControls/BuildControls';

const INGREDIENTS_PRICE = {
    salad: 0.5,
    chesse: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurguerBuilder extends Component{

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = type => {
        // att the ingredients
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {...this.state.ingredients}

        updatedIngredients[type] = updatedCount;

        // att the total price
        const priceAddition = INGREDIENTS_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        //setState
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })
    }

    render(){
        return(

            <Auxiliary>

                <Burguer ingredients={this.state.ingredients}/>

                <BuildControls ingredientAdded={this.addIngredientHandler}/>

            </Auxiliary>

        );
    }

}

export default BurguerBuilder;