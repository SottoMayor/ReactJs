import React from 'react';

import classes from './Modal.module.css';

import Backdrop from '../Backdrop/Backdrop';

import Auxiliary from '../../../hoc/Auxiliary';

const modal = props => (

    <Auxiliary>

        <Backdrop show={props.show} clicked={props.modalClosed} />

        <div className={classes.Modal}
            style={{
                transform: (props.show) ? 'translateY(0px)' : 'translateY(-10vh)',
                opacity: (props.show) ? '1' : '0'
            }}
        >
            {props.children}
        </div>

    </Auxiliary>
)

export default modal;