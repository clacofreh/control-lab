import React from 'react'
import Header from '../Header'
import MaquetasFrom from '../pages/Maquetas/Maquetas'
import SideMenu from '../SideMenu/SideMenu'
import { makeStyles, CssBaseline, createMuiTheme  } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
const useStyles = makeStyles({
    appMain: {
      paddingLeft: '320px',
      width: '100%'
    }
  })
  
export function Front() {
    const classes = useStyles();
    return (
        <>
           <Header/>

        <div className={classes.appMain}>

         <SideMenu/>
         <MaquetasFrom/>
        </div>
        </>
    )
}


