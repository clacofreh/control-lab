import React from 'react'
import { AppBar, Toolbar, Grid, InputBase, IconButton, makeStyles } from '@material-ui/core'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import {
    Link as LinkRRD,
  } from "react-router-dom";
//Almacenamos el Logo
const Logo = () =>{
    return (<img src={require('../img/logo.png')}></img>)}


const useStyles = makeStyles(theme => ({
    root: {
       
        backgroundColor: '#EBFDEC',
        
    },
    searchInput: {
        opacity: '0.6',
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        }
    }   
}))

export default function Header() {

    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container
                    alignItems="center">
                    <Grid item>
                        <Logo/>
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                       
                        <IconButton  component={LinkRRD} to="/">
                            <PowerSettingsNewIcon fontSize="small" />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
