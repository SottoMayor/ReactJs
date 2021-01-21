import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';

import classes from './Layout.module.css';

import Toolbar from '../Navigation/Toolbar/Toolbar';

import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{

    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        // Fix a possible bug!
        //let stateControl = this.state.showSideDrawer;
        //this.setState({showSideDrawer: !(stateControl)});
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
        
    }

    render() {
        
        return(

        <Auxiliary>      

            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>

            <SideDrawer  open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />  
            
            <main className={classes.Content}>
                {this.props.children}
            </main>

        </Auxiliary>

        );

    };
};
    

export default Layout;