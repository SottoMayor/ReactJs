import React, { Component } from 'react'

import Auxiliary from '../../hoc/Auxiliary';

import Burguer from '../../components/Burguer/Burguer'

class BurguerBuilder extends Component{

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render(){
        return(

            <Auxiliary>

                <Burguer ingredients={this.state.ingredients}/>

                <div>
                    Build Controls
                </div>

            </Auxiliary>

        );
    }

}

export default BurguerBuilder;