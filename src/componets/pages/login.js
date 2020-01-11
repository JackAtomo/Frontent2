import React, { componets, useState } from "react";
import { useAuth } from "../commons/auth/auth-context";
import {useForm} from "react-hook-form";
import { LOGEARSE_VALIDATIONS } from "../commons/auth/validation";

function Login(setIsFormOpen) {
    const { signIN } = useAuth();
    const { register, errors, formState, handleSubmit, setError } = useForm({
      mode: "onBlur" // Lanza validaciones cada vez que hago blur
    });
    
    const handleSignUp = formData => {
      return signIN(formData).catch(error => {
            if (error.response.status === 409) {
              setError(
                "email",
                "conflict",
                "The email already exists. Please try again"
              );
            }
          });
        };
    
    return (
  <span id="login">  
  <div>
  <button className="close" onClick={() => setIsFormOpen(false)}>X</button>
  <form action="" method="post" onSubmit={handleSubmit(handleSignUp)}>
    <fieldset>
      <label htmlFor="email">Email</label>
      <input type="text" id="email"
      ref={register(LOGEARSE_VALIDATIONS.email)}
       name="email" />
       <span className="errorMessage">
          {errors.name && errors.name.message}
        </span>
      <label htmlFor="password">Contraseña</label>
      <input type="password" id="password"
      ref={register(LOGEARSE_VALIDATIONS.PASSWORD)}
      name="password" />
      <span className="errorMessage">
          {errors.name && errors.name.message}
        </span>
      <button type="submit"
          className="btn"
          disabled={formState.isSubmitting}>
      Entrar</button>
    </fieldset>
  </form>
  </div>
  </span>
  );
  }
  export {Login}