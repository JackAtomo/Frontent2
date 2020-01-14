import React, { componets } from "react";
import { useAuth } from "../commons/auth/auth-context";
import {useForm} from "react-hook-form";
import { REGISTER_VALIDATIONS } from "../commons/auth/validation";

function Registrarse() {
    const { signUp } = useAuth();
    const { register, errors, formState, handleSubmit, setError } = useForm({
      mode: "onBlur" // Lanza validaciones cada vez que hago blur
    });

    const handleSignUp = formData => {
        return signUp(formData).catch(error => {
             let status=document.getElementById('status');
          if (error.response.status === 409) {
            status.innerHTML="The email already exists. Please try again";
               setError(
              "email",
              "conflict",
              "The email already exists. Please try again"
            );
          }else{
               status.innerHTML=`Algo a ido mal intentelo de nuevo Error:${error.response.status}`;

          }
        });
      };
    
return (
    <React.Fragment>
         <p id="status"></p>
        <form id="registro" onSubmit={handleSubmit(handleSignUp)}>
            <div id="regis">
        <fieldset>
            <label htmlFor="firstName" >Nombre</label>
                 <input type="text"
                    name="firstName"
                    ref={register(REGISTER_VALIDATIONS.firstName)}
                    id="firstName"/>
            <label htmlFor="lastName">Apellidos</label>
                 <input type="text" 
                 name="lastName"
                 ref={register(REGISTER_VALIDATIONS.lastName)}
                 id="lastName"/>
            <label htmlFor="phone">Telefono</label>
                 <input type="text"
                 name="phone"
                 ref={register(REGISTER_VALIDATIONS.phone)}
                 id="phone"/>
            <label htmlFor="dob">Fecha de nacimiento</label>
                 <input type="date"
                 name="dob"
                 ref={register(REGISTER_VALIDATIONS.dob)}
                 id="dob"/>
            <label htmlFor="gender">Genero</label>
                 <select
                 name="gender"
                 ref={register(REGISTER_VALIDATIONS.gender)}
                 id="gender">
                     <option value="1">Mujer</option>
                    <option value="0">Hombre</option>
                </select>
        </fieldset>
        <fieldset>
            <label htmlFor="email">Email</label>            
                 <input type="email"
                 name="email"
                 ref={register(REGISTER_VALIDATIONS.email)}
                 id="email"/>
            <label htmlFor="password">Password</label>            
                 <input type="password"
                 name="password"
                 ref={register(REGISTER_VALIDATIONS.password)}
                 id="password"/>
            <label htmlFor="address">Direccion</label>
                 <input type="text"
                  name="address"
                 ref={register(REGISTER_VALIDATIONS.address)}
                 id="address"/>

            <label htmlFor="postalCode">Codigo Postal</label>
                 <input type="text" 
                 name="postalCode"
                 ref={register(REGISTER_VALIDATIONS.postalCode)}
                 id="postalCode"/>
            <label htmlFor="borIn">Lugar de nacimiento</label>   
                 <select
                 name="bornIn"
                 ref={register(REGISTER_VALIDATIONS.bornIn)}
                 id="bornIn">
                     <option value="Spain">Spain</option>
                     <option value="Other">Other</option>
                 </select>
        </fieldset>
        </div>
        <button id="registrarse" type="submit"
        disabled={formState.isSubmitting}>
        Registrarse
        </button>
        </form>
</React.Fragment>
)

}
export default Registrarse;