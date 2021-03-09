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
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type:  'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            zipCode:{
                elementType: 'input',
                elementConfig: {
                    type:  'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type:  'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type:  'email',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            deliveryFee: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: 'This is a delivery fee!',
                validation: {
                    required: false
                },
                valid: true
            }
        },
        loading: false
    }
    
    orderHandler = (event) => {

        event.preventDefault();
         
        this.setState({
            loading: true
        })

        const formData = {};
        for (let formElementIdentifier in this.state.orderForm){
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
            
        }

        console.log(formData)

        const order = {
            ingredients : this.props.ingredients,
            price : this.props.price,
            orderData: formData
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


    checkValidity = (value, rules) => {

        let isValid = true

        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid;
        }

        if(rules.maxLength && isValid){
            isValid = value.length <= rules.maxLength && isValid
        }

        return isValid;

    }


    inputValueHandler = (event, inputIdentifier) => {
        
        const updatedOrderForm = {...this.state.orderForm}
        const updatedElementForm = {...updatedOrderForm[inputIdentifier]}

        updatedElementForm.value = event.target.value;
        updatedElementForm.valid = this.checkValidity(updatedElementForm.value, updatedElementForm.validation);
        updatedOrderForm[inputIdentifier] = updatedElementForm;
        console.log(updatedOrderForm)

        this.setState({orderForm: updatedOrderForm})
        
    };
    


    render() {

        let form = (
            <form onSubmit={this.orderHandler} autoComplete="off">

                {
                    Object.keys(this.state.orderForm).map(item => {
                        return <Input key={item} elementType={this.state.orderForm[item].elementType} 
                        elementConfig={this.state.orderForm[item].elementConfig} 
                        value={this.state.orderForm[item].value}
                        invalid={!this.state.orderForm[item].valid} 
                        changed={(event) => {this.inputValueHandler(event, item)}}/>

                    })
                }

                <Button btnType='Success'>ORDER NOW</Button>

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
