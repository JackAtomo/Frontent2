//componets
import React from "react";
import ReactDOM from "react-dom";
//
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useParams, useHistory } from "react-router";

import "./css/index.css";

//componets//

import {Header, AuthProvider, PrivateRoute} from "./componets/commons/index";

//main
import {Consultar, Inicio, Contacto, Registrarse, User, Admin} from "./componets/pages/index"


//main//

//componets//

//header

//header//
//footer

//footer//
//main
const bodyElement = document.getElementById("body");

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <header>
        <Header/>
        </header>
        <main>
        <Switch>
        <PrivateRoute path="/user">
          <User/>
        </PrivateRoute>
        <PrivateRoute path="/admin">
          <Admin/>
        </PrivateRoute>
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
        </main>
      </AuthProvider>
    </BrowserRouter>
  );
}
function NotFound() {
  return <h3>Not Found</h3>;
}

ReactDOM.render(<App />, bodyElement);
//main//
