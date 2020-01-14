import React from "react"
import {getDatos} from "../axios/userServices";
import { useAuth } from "../commons/auth/auth-context";

function User() {
  let login = document.getElementById('login');
  login.innerHTML=""  
  login.parentNode.removeChild(login);

  const {token} = useAuth();

  return (
      <React.Fragment>
        <section id="user">


  <span id="datos">
  <h1>Mis Datos:</h1>
  {Datos(token)}
  
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
              <button id="danger" >Cancelar Cuenta</button>
            </fieldset>
          </span>
        </section>
      </React.Fragment>
    );
  }


export default User;


function Datos(token){
    const  {
      firstName,
      lastName,
      email,
      password,
      gender,
      dob,
      address,
      postalCode,
      phone,
      bornIn,
    } =  get(token);


  return(
  <React.Fragment>
  <fieldset>
    <h2 id="name">{firstName}</h2>
    <h3 id="apellidos">{lastName}</h3>
  </fieldset>
  <fieldset>
    <label>Phone:</label>
<label id="phone">{phone}</label>
  </fieldset>
  <fieldset>
    <label>Email:</label>
<label id="email">{email}</label>
  </fieldset>
  <fieldset>
    <label>Genero:</label>
<label id="gender">{gender}</label>
  </fieldset>
  <fieldset>
    <label>Direccion:</label>
    <label id="address">{address}</label>
  </fieldset>
  <fieldset>
    <label>Fecha de nacimiento:</label>
<label id="dob">{dob}</label>
  </fieldset>
  <fieldset>
    <label>Born IN:</label>
<label id="bornin">{bornIn}</label>
  </fieldset>
  <fieldset>
    <label>Codigo Postal:</label>
<label id="cp">{postalCode}</label>
  </fieldset>
  </React.Fragment>
  );
}
  
  

const get = async (token)=> {
  
  try{
    const {datos:{
      firstName,
      lastName,
      email,
      gender,
      dob,
      address,
      postalCode,
      phone,
      bornIn}
    } =  await getDatos(token);

return{firstName,
  lastName,
  email,
  gender,
  dob,
  address,
  postalCode,
  phone,
  bornIn}
  }catch{return <h1>Algo a ido mal</h1>}
  }