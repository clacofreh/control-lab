import React from 'react'
import { makeStyles, requirePropFactory, withStyles } from "@material-ui/core";
import {Items} from './Items'
// withStyles & makeStyles

const style = {
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '1000%',
        backgroundColor: '#DB1801'
    }
}

const title = ['']
const SideMenu = (props) => {
    const { classes } = props;
    return (
        <div className={classes.sideMenu}>
         
            <Items /> 
           
        </div>
    )
}

export default withStyles(style)(SideMenu);
