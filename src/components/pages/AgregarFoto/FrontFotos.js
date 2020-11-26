import React from 'react'
import Header from '../../Header'
import SideMenu from '../../SideMenu/SideMenu'
import { Grid, makeStyles} from '@material-ui/core';
import {AgregarFoto} from './AgregarFoto'
import { GridList } from '@material-ui/core';
import image from '../../../img/imagenUno.jpeg'
import Imagenes from './Imagenes'
const useStyles = makeStyles({
    appMain: {
      paddingLeft: '320px',
      width: '100%'
    }
  })
 
  
export function FrontFotos() {
    const classes = useStyles();
    return (
        <>
           <Header/>

        <div className={classes.appMain}>
        <SideMenu/>

        <Grid>
             <Grid itemxs={6}>
                 <Imagenes/>
            </Grid>
            <Grid itemxs={6}>
                <AgregarFoto/>
            </Grid>
        </Grid>
       
        </div>
        </>
    )
}

