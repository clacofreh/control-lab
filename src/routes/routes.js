import React from 'react';
import { SignInSide } from '../components/pages/Login/Login.js';
import { FormularioRegistro } from '../components/pages/Login/Registro.js';
import { AgregarFptp } from '../components/pages/AgregarFoto/AgregarFoto'
import { Front } from '../components/pages/Front'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { FrontFotos } from '../components/pages/AgregarFoto/FrontFotos.js';

export const Enrutador = () => {
  return (<Router>
    <Switch>
      <Route path="/FotoLaboratorio">
        <FrontFotos />
      </Route>
      <Route path="/Inicio">
        <Front />
      </Route>
      <Route path="/Registro">
        <FormularioRegistro />
      </Route>
      <Route path="/">
        <SignInSide />
      </Route>
    </Switch>
  </Router>)
}