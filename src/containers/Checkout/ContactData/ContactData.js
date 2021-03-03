import React, { Component } from 'react';

import classes from './ContactData.module.css';

import Button from '../../../components/UI/Button/Button';

import axios from '../../../axios-orders';

import Spinner from '../../../components/UI/Spinner/Spinner';

import Input from '../../../components/UI/Input/Input';

class contactData extends Component {

    state = {
        orderForm:{
            name: {
                elementType: 'input',
                elementConfig: {
                    type:  'text',
                    placeholder: 'Your name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type:  'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            zipCode:{
                elementType: 'input',
                elementConfig: {
                    type:  'text',
                    placeholder: 'ZIP Code'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type:  'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type:  'email',
                    placeholder: 'Email'
                },
                value: ''
            },
            deliveryFee: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: 'This is a delivary fee!'
            }
        },
        loading: false
    }
    
    orderHandler = (event) => {

        event.preventDefault();
         
        this.setState({
            loading: true
        })

        const order = {
            ingredients : this.props.ingredients,
            price : this.props.price
        }

        axios.post('/orders.json', order)
        .then(result => {
            this.setState({
                loading: false
            })
            this.props.history.push('/');
        })
        .catch(err => {
            this.setState({
                loading: false
            })
        });
        

    };

    render() {

        

        let form = (
            <form>

                {
                    Object.keys(this.state.orderForm).map(item => { console.log(item);
                        return <Input key={item} elementType={this.state.orderForm[item].elementType} 
                        elementConfig={this.state.orderForm[item].elementConfig} 
                        value={this.state.orderForm[item].value} />
                    })
                }

                <Button btnType='Success' clicked={this.orderHandler}>ORDER NOW</Button>

                </form>
        )

        if( this.state.loading ){
            form = <Spinner/>
        }

        return (
            <div className={classes.ContactData}>
                
                <h4>Enter your contact data</h4>

                {form}

            </div>
        )
    }
}

export default contactData;
