import React from "react"

import {getDatos, deleteAcount} from "../axios/userServices";
import { useAuth } from "../commons/auth/auth-context";

function User() {
  

  const {token} = useAuth();
  
  
  let login = document.getElementById('login');
 login.innerHTML=""  
  login.parentNode.removeChild(login);
  
  
 

  Datos()
  return (
      <React.Fragment>
        <section id="user">
  <span id="datos">
  <h1>Mis Datos:</h1>
  <fieldset>
  <h2 id="first_name"></h2>
    <h3 id="last_name"></h3>
  </fieldset>
  <fieldset>
    <label>Phone:</label>
<label id="phone"></label>
  </fieldset>
  <fieldset>
    <label>email:</label>
<label id="email"></label>
  </fieldset>
  <fieldset>
    <label>gender:</label>
<label id="gender"></label>
  </fieldset>
  <fieldset>
    <label>Direccion:</label>
    <label id="address"></label>
  </fieldset>
  <fieldset>
    <label>Fecha de nacimiento:</label>
<label id="dob"></label>
  </fieldset>
  <fieldset>
    <label>Born IN:</label>
<label id="born_in"></label>
  </fieldset>
  <fieldset>
    <label>Codigo Postal:</label>
<label id="postal_code"></label>
  </fieldset>
  </span>
          <span id="solicitud">
            <h1>Solicitar asistencia:</h1>
            <fieldset>
              <h2>Titulo:</h2>
              <input type="text" id="title" />
            </fieldset>
            <fieldset>
              <h3>Descripcion</h3>
              <textarea id="description" />
            </fieldset>
            <fieldset>
              <h3>Precio Estimado</h3>
              <input type="number" />
            </fieldset>
            <fieldset>
              <button>Enviar</button>
            </fieldset>
          </span>
          <span id="acciones">
            <h1>Acciones</h1>
            <fieldset>
              <button>Cambiar Datos</button>
              <button>Contratar Seguro</button>
              

            </fieldset>
            <fieldset>
            <button> Dar de baja poliza</button>
              <button id="danger" onClick={()=>del(token)} >Cancelar Cuenta</button>
            </fieldset>
          </span>
        </section>
      </React.Fragment>
    );
  }


export default User;


async function del(token){
  let respon = await deleteAcount(token)
    if(await respon ){
      window.location("")
    }
 }
 
  
  

 async function Datos(){
  
  const {token} = useAuth();
  const  response = await getDatos(token);
  const data= response.data.Datos
  await response;
    console.log(data);
    document.getElementById("first_name").innerHTML= await data.first_name
  const keys = Object.keys(data)
const values= Object.values(data)
  for (let index = 0; index < keys.length; index++) {
    if(keys[index]=="gender"){
      let value=null
      switch (values[index]) {
        case 0:
        value[index] ="Mujer";
        break;
        case 1:
        values[index]="Hombre";
        break;
    }
  }else if (keys[index]=="dob") {
    var res = values[index].split("T") 
    values[index]=res[0];
  }

    document.getElementById(`${keys[index]}`).innerHTML= values[index]

  }

    
  }
