//componets
import React from "react";
import ReactDOM from "react-dom";
//
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useParams, useHistory } from "react-router";

import "./css/index.css";

//componets//

import {Header, Footer, AuthProvider, PrivateRoute} from "./componets/commons/index";

//main
import {Consultar, Inicio, Contacto, Registrarse, Registrarse2} from "./componets/pages/index"


//main//

//componets//

//header
const headerElement = document.getElementById("header");
ReactDOM.render(<Header />, headerElement);
//header//
//footer
const footerElement = document.getElementById("footer");
ReactDOM.render(<Footer />, footerElement);
//footer//
//main
const mainElement = document.getElementById("main");

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path="/">
            <Inicio />
          </Route>
          <Route path="/consultar">
            <Consultar />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/registrarse">
        <Registrarse/>
        </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <PrivateRoute path="/user">
          
        </PrivateRoute>
      </AuthProvider>
    </BrowserRouter>
  );
}
function NotFound() {
  return <h3>Not Found</h3>;
}

ReactDOM.render(<App />, mainElement);
//main//
