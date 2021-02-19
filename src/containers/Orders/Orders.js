import React, { Component } from 'react';

import Order from '../../components/Order/Order';

import axios from '../../axios-orders';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    }
    
    componentDidMount() {
        axios.get('/orders.json')
        .then( response => {

                const fetchedOrders = [];

                for (let key in response.data){
                    fetchedOrders.push( {
                        ...response.data[key], id: key
                    } )
                }

                this.setState({loading: false, orders: fetchedOrders});
            })
        .catch( err => {
            console.log(err);
            this.setState({loading: false});
        })
    }
    

    render() {

        const totalPrice = this.state.orders.map( orderObj => {
            return orderObj.price
        }).reduce((sum, indexTotalPrice) => {
            return (sum + (+indexTotalPrice))
        }, 0)

        let showUI = <Spinner/>;
        if(this.state.loading === false){
            showUI = (
                <div>
                {
                this.state.orders.map(order => {
                    return <Order key={order.id} ingredients={order.ingredients} price={order.price}/>
                })
                }

                <p style={{textAlign:'center', width:'100%'}} >Total Price: <strong>{totalPrice.toFixed(2)}</strong></p>
            </div>
            )
        }

        return (
            <div>
                {showUI}
            </div>
        )
    }
}

export default withErrorHandler(Orders, axios);
