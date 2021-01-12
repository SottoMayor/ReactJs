import React, { Component } from 'react'

import Auxiliary from '../../hoc/Auxiliary';

import Burguer from '../../components/Burguer/Burguer'

class BurguerBuilder extends Component{

    render(){
        return(

            <Auxiliary>

                <Burguer/>

                <div>
                    Build Controls
                </div>

            </Auxiliary>

        );
    }

}

export default BurguerBuilder;