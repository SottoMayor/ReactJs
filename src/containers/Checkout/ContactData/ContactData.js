import React, { Component } from 'react';

import classes from './ContactData.module.css';

import Button from '../../../components/UI/Button/Button';

class contactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postal: ''
        }
    }
    

    render() {
        return (
            <div className={classes.ContactData}>
                
                <h4>Enter your contact data</h4>

                <form>

                    <input className={classes.Input} type='text' name='name' placeholder='Name' />
                    <input className={classes.Input} type='email' name='email' placeholder='Email' />
                    <input className={classes.Input} type='text' name='street' placeholder='Street' />
                    <input className={classes.Input} type='text' name='postal' placeholder='Postal' />

                    <Button btnType='Success' >ORDER NOW</Button>

                </form>

            </div>
        )
    }
}

export default contactData;
