import React, { Component } from 'react'

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

import Burguer from '../../components/Burguer/Burguer';

import BuildControls from '../../components/Burguer/BuildControls/BuildControls';

import Modal from '../../components/UI/Modal/Modal';

import OrderSummary from '../../components/Burguer/OrderSummary/OrderSummary';

import axios from '../../axios-orders';

import Spinner from '../../components/UI/Spinner/Spinner';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENTS_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurguerBuilder extends Component{

    state = {
        ingredients: null,
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount(){

        axios.get('https://react-burger-builder-br-default-rtdb.firebaseio.com/ingredients.json')
        .then(response => {
            this.setState({ingredients: response.data})
        })
        .catch(err => {
            this.setState({error: true})
        });
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

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {

        /*
        this.setState({
            loading: true
        })

        const order = {
            ingredients : this.state.ingredients,
            price : this.state.totalPrice,
            customer: {
                name: 'David',
                address: {
                    number: 0,
                    street: 'Dummy',
                    city: 'Lorem Ipsum'
                },
                email: 'test@test.com',
            },
            deliveryFee: 'free'
        }

        axios.post('/orders.json', order)
        .then(result => {
            this.setState({
                loading: false,
                purchasing: false
            })
        })
        .catch(err => {
            this.setState({
                loading: false,
                purchasing: false
            })
        });
        */

        const queryParams = [];
        
        for( let i in this.state.ingredients ){

            queryParams.push( encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]) )

        }

        const queryString = queryParams.join('&');

        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    }

    render(){

        const disabledInfo = {...this.state.ingredients};
        for (let element in disabledInfo){
            disabledInfo[element] = disabledInfo[element] <= 0
        }

        let orderSummary = null;

        let burger = this.state.error ? <p>We can't loaded the ingredient, error!!</p> : <Spinner/>;

        if(this.state.ingredients){
            burger = (
                <Auxiliary>
                    <Burguer ingredients={this.state.ingredients}/>
    
                    <BuildControls ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchaseHandler}
                    />
                </Auxiliary>
            );

            orderSummary = (
                <OrderSummary ingredients={this.state.ingredients}
                         price={this.state.totalPrice}
                         purchaseCancelled={this.purchaseCancelHandler}
                         purchaseContinued={this.purchaseContinueHandler} />
            );
        }

        if(this.state.loading){
            orderSummary = <Spinner/>
        }

        return(

            <Auxiliary>

                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>

                    {orderSummary}

                </Modal>

                {burger}

            </Auxiliary>

        );
    }

}

export default withErrorHandler(BurguerBuilder, axios);