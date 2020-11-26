import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';



const FotoUno = () => {
    return (<img src={require('../../../img/imagenUno.jpeg')}></img>)
}
const FotoDos = () => {
    return (<img src={require('../../../img/imagenDos.jpg')}></img>)
}
const Fototres = ()=>{
    return (<img src={require('../../../img/imagenTres.jpg')}></img>)
  }
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
}));


export default function Imagenes() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
           
                    <GridListTile >
                        <FotoUno/>
                    </GridListTile>
             
            </GridList>
        </div>
    );
}
