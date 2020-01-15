import React, { componets, useState } from "react";
import { SINGIN_VALIDATIONS } from "../commons/auth/validation";
import { useAuth } from "../commons/auth/auth-context";
import { useForm } from "react-hook-form";

function Header() {
 

const [isFormOpen, setIsFormOpen] = useState(false);
  
  return (
    <nav>
      <a href="/">Inicio </a>
      <a href="/consultar">Consultar </a>
      <a href="/registrarse">Registrarse</a>
      <a href="/contacto">Contacto</a>
      <a onClick={() => setIsFormOpen(true)}>Log in</a>
      {isFormOpen && <Login />}

    </nav>
 );
}

function Login(props) {

  

  const { singIN } = useAuth();
  const { register, errors, formState, handleSubmit, setError } = useForm({
    mode: "onBlur" // Lanza validaciones cada vez que hago blur
  });

  const handleSignIn = formData => {
    return singIN(formData).catch(error => {
      console.log("error")
      try{
      let statusl=document.getElementById("statusl");
      
      if (error.response.status === 401) {
        statusl.innerHTML=`Contraseña o correo erroneos`;
      }else{
        statusl.innerHTML=`Algo a ido mal intentelo de nuevo Error:${error.response.status}`;
      }
    }catch{
    }
    });
  };

  return (
 
  <span id="login">  
  <div>
    <button onClick={()=>{let login = document.getElementById('login');
 login.innerHTML=""  
  login.parentNode.removeChild(login)}} className="close" id="close">X</button>
    <form action="" method="post" onSubmit={handleSubmit(handleSignIn)}>
    <span id="statusl"></span>
      <fieldset>
        <label htmlFor="email">Email</label>
        <input type="text" id="email"
        ref={register(SINGIN_VALIDATIONS.email)}
         name="email" />
         <span className="errorMessage">
            {errors.name && errors.name.message}
          </span>
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password"
        ref={register(SINGIN_VALIDATIONS.password)}
        name="password" />
        <span className="errorMessage">
            {errors.name && errors.name.message}
          </span>
        <button type="submit" disabled={formState.isSubmitting}>
          Entrar
        </button>
      </fieldset>
    </form>
    </div>
  </span>
  );
}


export default Header;
