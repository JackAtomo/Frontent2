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
      {isFormOpen && <Login/>}
    </nav>
 );
}

function Login() {

  const [isFormOpen, setIsFormOpen] = useState(false);



  const { singIN } = useAuth();
  const { register, errors, formState, handleSubmit, setError } = useForm({
    mode: "onBlur" // Lanza validaciones cada vez que hago blur
  });

  const handleSignIn = formData => {
    return singIN(formData).catch(error => {
      try{
      if (error.response.status === 200) {
        console.log("todo OK")
      }
      }catch{
        console.log("Algo a ido mal")
      }
    });
  };

  return (
  <span id="login">  
  <div>
    <button className="close" onClick={() => setIsFormOpen(false)}>X</button>
    <form action="" method="post" onSubmit={handleSubmit(handleSignIn)}>
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
        ref={register(SINGIN_VALIDATIONS.PASSWORD)}
        name="password" />
        <span className="errorMessage">
            {errors.name && errors.name.message}
          </span>
        <button>
        Entrar
        </button>
      </fieldset>
    </form>
    </div>
  </span>
  );
}


export default Header;
