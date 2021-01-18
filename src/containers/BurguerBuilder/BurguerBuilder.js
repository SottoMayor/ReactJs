import React, { Component } from 'react'

import Auxiliary from '../../hoc/Auxiliary';

import Burguer from '../../components/Burguer/Burguer';

import BuildControls from '../../components/Burguer/BuildControls/BuildControls';

import Modal from '../../components/UI/Modal/Modal';

import OrderSummary from '../../components/Burguer/OrderSummary/OrderSummary';

const INGREDIENTS_PRICE = {
    salad: 0.5,
    cheese: 0.4,
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
        totalPrice: 4,
        purchaseable: false
    }

    updatePurchaseableState(ingredients){

        const sum = Object.keys(ingredients)
        .map(ingKey => {
            return ingredients[ingKey]
        })
        .reduce((sum, element) => {
            return sum + element
        }, 0)


        this.setState({purchaseable: sum > 0})

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

        // Purchaseable??
        this.updatePurchaseableState(updatedIngredients);
    }

    removeIngredientHandler = type => {
        //att the ingredients
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const newCount = oldCount - 1;
        const updatedIngredients = {...this.state.ingredients};

        updatedIngredients[type] = newCount;

        //att the total price
        const priceDeduction = INGREDIENTS_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        //setState
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice})

        // Purchaseable??
        this.updatePurchaseableState(updatedIngredients);
    }

    render(){

        const disabledInfo = {...this.state.ingredients};
        for (let element in disabledInfo){
            disabledInfo[element] = disabledInfo[element] <= 0
        }

        return(

            <Auxiliary>

                <Modal>

                    <OrderSummary ingredients={this.state.ingredients} />

                </Modal>

                <Burguer ingredients={this.state.ingredients}/>

                <BuildControls ingredientAdded={this.addIngredientHandler} 
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                price={this.state.totalPrice}
                purchaseable={this.state.purchaseable}
                />
            </Auxiliary>

        );
    }

}

export default BurguerBuilder;