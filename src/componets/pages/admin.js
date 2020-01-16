import React, {useState} from "react"
import { useAuth } from "../commons/auth/auth-context";
import {getService} from "../axios/adminServices"
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
