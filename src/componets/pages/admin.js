import React, {useState} from "react"
import { useAuth } from "../commons/auth/auth-context";
import {getService,rechazarsolicitud,aceptarsolicicitud } from "../axios/adminServices"
function Admin() {

  const {token} = useAuth();
 


  
  let login = document.getElementById('login');
 if(login!=null){
  login.innerHTML=""  
  login.parentNode.removeChild(login);

 

  solicitudes(token)
}
 return(
 <React.Fragment>
 <h1>Admin Page</h1>
 <fieldset id="solicitudes">
     
 </fieldset>
 <fieldset id="action">
 {Rechazar(token)}
 </fieldset>
 </React.Fragment>)
}
export {Admin};

async function solicitudes(token){
    let response = await getService(token)
   let services = await response.data;
   document.getElementById("solicitudes").innerHTML= "";

   for (const service of services) {
     let output = `<fieldset>
     <label>Solicitud:${service.id}</label>
     <p>${service.content}</p>
     </fieldset>`
     console.log(service)
   document.getElementById("solicitudes").innerHTML= output + document.getElementById("solicitudes").innerHTML;
   }
   }

   function Rechazar(token){
   
    async function Optiones(token){
    let response = await  getService(token)
    let services = response.data;
    document.getElementById("services").innerHTML=""
    let out=""
    for (const service of services) {
      let out=`<option value="${service.id}">${service.id}</option>`;
  document.getElementById("services").innerHTML= out +   document.getElementById("services").innerHTML;
      
    }
  }
    async function cancel(token){
      console.log("cancel");
if(document.getElementById("services")!=null){
      let id= document.getElementById("services").value
     try{
      await rechazarsolicitud(token,id);
      window.alert("Solicitud rechazada");
      solicitudes(token)
      Optiones(token)
     }catch{
      window.alert("Algo a ido mal intentelo de nuevo");
     }
    }}
    async function agree(token){
      console.log("cancel");
if(document.getElementById("services")!=null){
      let id= document.getElementById("services").value
     try{
      await aceptarsolicicitud(token,id);
      window.alert("Solicitud aceptada");
      solicitudes(token)
      Optiones(token)
     }catch{
      window.alert("Algo a ido mal intentelo de nuevo");
     }
    }}
    
    
  
  Optiones(token)
return(
  <span> 
  
  <label>Mis polizas:</label>
  <select id="services">
  
  </select>
  <button id="cancel" onClick={()=>cancel(token)} className="danger">Rechazar</button> 
  <button id="agree" onClick={()=>agree(token)} className="agree">Aceptar</button> 

  </span>
    )

}



 