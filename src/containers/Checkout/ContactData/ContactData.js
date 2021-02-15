import React, { Component } from 'react';

import classes from './ContactData.module.css';

import Button from '../../../components/UI/Button/Button';

import axios from '../../../axios-orders';

import Spinner from '../../../components/UI/Spinner/Spinner';

class contactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postal: ''
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
            price : this.props.price,
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

                    <input className={classes.Input} type='text' name='name' placeholder='Name' />
                    <input className={classes.Input} type='email' name='email' placeholder='Email' />
                    <input className={classes.Input} type='text' name='street' placeholder='Street' />
                    <input className={classes.Input} type='text' name='postal' placeholder='Postal' />

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
