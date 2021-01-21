import React, { Component } from 'react';

import classes from './Modal.module.css';

import Backdrop from '../Backdrop/Backdrop';

import Auxiliary from '../../../hoc/Auxiliary';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show;
    }

    componentDidUpdate(){
        console.log('[MODAL] - Will Update');
    }

    render() {

        return(

            <Auxiliary>

                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />

                <div className={classes.Modal}
                    style={{
                        transform: (this.props.show) ? 'translateY(0px)' : 'translateY(-100vh)',
                        opacity: (this.props.show) ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>

            </Auxiliary>

        );

    }
}

export default Modal;