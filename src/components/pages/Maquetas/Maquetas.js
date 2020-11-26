import React from 'react'
import MaquetasForm from "./MaquetasForm";
import PageHeader from "../../PageHeader";
import SimCardIcon from '@material-ui/icons/SimCard';
import { Paper,makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function Maquetas() {

    const classes = useStyles();

    return (
        <>
            <PageHeader
                title="Nueva Maqueta"
                subTitle="Formulario Registro de Maquetas"
                icon={<SimCardIcon color="secondary" fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                <MaquetasForm />
            </Paper>
        </>
    )
}
