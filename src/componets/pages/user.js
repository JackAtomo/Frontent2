import React, {useState} from "react"
import { useForm } from "react-hook-form";
import {getDatos, solicitarAsistencia, deleteAcount, buySeguro, getPolices, cancelPolice} from "../axios/userServices";
import { useAuth } from "../commons/auth/auth-context";

function User() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const {token} = useAuth();
  
  
  let login = document.getElementById('login');
 if(login!=null){
  login.innerHTML=""  
  login.parentNode.removeChild(login);
}
  
  Poliza(token)
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
  <fieldset>
    <p>
    <button class="danger" id="danger" onClick={()=>del(token)} >Cancelar Cuenta</button>
    </p>
  </fieldset>
  </span>
  <span id="poliza">
  <h1 id="mis_polizas">Mis Poliza:</h1>
  
  <fieldset id="polizas"/>
  <h1>Contratar nueva Poliza</h1>
  
  <fieldset id="contratar">
  {Contratar(token)}
  </fieldset>

  <h1> Cancelación</h1>
  <fieldset>
{BajaPoliza(token)}

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
              <input type="number" id="price"/>
            </fieldset>
            <fieldset>
              <button onClick={()=>enviar(token)}>Enviar</button>
            </fieldset>
          </span>
          <span id="acciones">
            <h1>Acciones</h1>
            <fieldset>
            {formDatos(token)}
              <button >Cambiar Datos</button> 
            
            </fieldset>
            <fieldset>
            </fieldset>
          </span>
        </section>
        
      </React.Fragment>
    );
  }


export default User;

function formDatos(token){
if(document.getElementById("datos")!=null){
let first_name=document.getElementById("first_name").innerHTML
let last_name=document.getElementById("last_name").innerHTML
let email=document.getElementById("email").innerHTML
let gender=document.getElementById("gender").innerHTML
let dob=document.getElementById("dob").innerHTML
let address=document.getElementById("address").innerHTML
let postal_code=document.getElementById("postal_code").innerHTML
let phone=document.getElementById("phone").innerHTML





}
}


async function enviar(token){
let title=document.getElementById("title").value
let description=document.getElementById("description").value
let price=document.getElementById("price").value
let content=`${title}:${description}.Price:${price}`;
try{ 
await solicitarAsistencia(token,content);
 document.getElementById("title").value=""
 document.getElementById("description").value=""
 document.getElementById("price").value=""
 window.alert("Solicitud Enviada");
}catch{
  window.alert("Algo a ido mal intentelo de nuevo");
}

}

function BajaPoliza(token){
   
      async function Optiones(token){
      let response = await  getPolices(token)
      let policies = response.data;
      document.getElementById("policies").innerHTML=""
      let out=""
      for (const police of policies) {
        let out=`<option value="${police.policyId}">${police.policyNumber}</option>`;
    document.getElementById("policies").innerHTML= out +   document.getElementById("policies").innerHTML;
        
      }
    }
      async function cancel(token){
        console.log("cancel");
if(document.getElementById("policies")!=null){
        let id= document.getElementById("policies").value
       try{
        await cancelPolice(token,id);
        window.alert("Poliza borrada");
        Poliza(token)
        Optiones(token)
       }catch{
        window.alert("Algo a ido mal intentelo de nuevo");

       }
      }}
      
    
    Optiones(token)
  return(
    <span> 
    
    <label>Mis polizas:</label>
    <select id="policies">
    
    </select>
    <button id="cotratar" onClick={()=>cancel(token)} className="danger">Cancelar Seguro </button> 
  
    </span>
      )

}

function Contratar(token){
  const { register, errors, formState, handleSubmit, setError } = useForm({
    mode: "onBlur" // Lanza validaciones cada vez que hago blur
  });
  return(
    <span> 
    <form action="" method="post" onSubmit={handleSubmit(buyInsur(token))}>
    <label>Tipo de Seguro:</label>
    <select id="types">
<option value="1">Basico</option>
<option selected value="2">Reforzado</option>
<option value="3">Premiun</option>
    </select>
    <button id="contratar" >Contratar Seguro</button> 
    </form>
    </span> )
}

async function del(token){
  let respon = await deleteAcount(token)
    if(await respon ){
      window.location.href="https://segurosalud.herokuapp.com/"
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
      switch (values[index]) {
        case 0:
        values[index] ="Mujer";
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
    
   async function buyInsur(token){
     if(document.getElementById("types")!=null){
    document.getElementById("contratar").diabled=true
    let type=document.getElementById("types").value
      let precio= await calcularPrecio(await type);
      try{
        await buySeguro(token,type,precio)
        window.alert("Seguro adquirido con exito");
        Poliza(token)
  }catch{
    window.alert("Algo a ido mal intentelo de nuevo");

  }

    } 
    };
  
 
   function calcularPrecio(type) {
    let dob = document.getElementById("dob").innerHTML;
    let pais =  document.getElementById("born_in").innerHTML;
    let sexo =  document.getElementById("gender").innerHTML;
    
    let today = new Date();
    let year = today.getFullYear();
    var res = dob.split("-")
    let edad= year-res[0]
    let incremento = 0;
    let precio=0
    switch (type) {
      case "1":
    precio = 10;
        break;
      case "2":
    precio = 20;
      break;
      case "3":
    precio = 30;
      break;
      }
    
    if (edad == 50 || edad < 30) {
      incremento = incremento + 16.66;
    }
    if (pais !== "Spain") {
      incremento = incremento + 33.33;
    }
    if (sexo == "Hombre") {
      incremento = incremento + 33.33;
    }
    incremento = (incremento + 100) / 100;
    precio = Math.round(precio * incremento * 100) / 100;
 
    return precio;
  }
   async function Poliza(token){
     let response = await getPolices(token)
    let policies = response.data;
    document.getElementById("polizas").innerHTML= "";

    for (const policie of policies) {
      let type=policie.policyType
      switch (type) {
        case 1:
          type="Basico"
          break;
          case 2:
          type="Reforzado"
          break;
          case 3:
          type="Premiun"
          break;
      }
      let output = `<fieldset>
      <label>Numero de Poliza:</label>
      <label>${policie.policyNumber}</label>
      </fieldset>
      <fieldset>
      <label>Tipo de seguro:</label>
      <label>${type}<label>
      </fieldset>
      <fieldset>
      </fieldset>` 
      console.log(policie)
    document.getElementById("polizas").innerHTML= output + document.getElementById("polizas").innerHTML;
    }
    }