import React from 'react'
import PageHeader from "../../PageHeader";
import { Paper,makeStyles } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CheckListForm from './CheckListForm'

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function CheckList() {

    const classes = useStyles();

    return (
        <>
            <PageHeader
                title="CheckList"
                subTitle="Ficha de Registro de Mantenimiento de Equipo"
                icon={<CheckIcon color="secondary" fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
               <CheckListForm/> 
            </Paper>
        </>
    )
}
