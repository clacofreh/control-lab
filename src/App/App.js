import React from 'react';
import './App.css';
import SideMenu from "../components/SideMenu/SideMenu";
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Header from "../components/Header";
import PageHeader from '../components/PageHeader'
import Maquetas from "../components/pages/Maquetas/Maquetas";
import Checklist from '../components/pages/CheckList/CheckList';
import { SignInSide } from '../components/pages/Login/Login.js'
import { Enrutador } from '../routes/routes'
import { Front } from '../components/pages/Front'
import { FrontFotos } from '../components/pages/AgregarFoto/FrontFotos'





const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#f4f5fd"
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)'
      }
    }
  },
  props: {
    MuiIconButton: {
      disableRipple: true
    }
  }
})


const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})

function App() {
  const classes = useStyles();

  return (
    <>
     <Enrutador></Enrutador>
    </>
  );
}

export default App;
