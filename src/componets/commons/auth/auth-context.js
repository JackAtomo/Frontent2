import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../axios/login";
import { register } from "../../axios/register";

// 1) Creamos el contexto
const AuthContext = React.createContext();


// Recuperamos el token del localStorage ya que si el usuario
// refresca la página del navegador necesito iniciar la aplicación
// con un estado autenticado
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const currentToken = JSON.parse(localStorage.getItem("currentToken"));

// 2) Creamos el custom Provider
export function AuthProvider({ children }) {
  // 2.1) Creamos Estados
  // En caso de que trabaje con roles deberia decodificar el token para obtener el role inicial
  // const [role, setRole] = useState(decodeTokenAndGetRole(currentUser.token));
  const [isAuthenticated, setIsAuthenticated] = useState(currentUser !== null);
  const [user, setUser] = useState(currentUser && currentUser.user);
  const [token, setToken] = useState(currentToken && currentToken.token);

  const history = useHistory();

  // 2.2) Definiremos los métodos para modificar el estado
  // Login => Cambiaré a true mi estado
  // Si trabajo con roles puedo establecer el role a través de la decodificación del token
  const singIN = async ({ email, password }) => {
    try {
      const {
        data: { accessToken, expireIN }
      } = await login(email, password);
      setUser(email);
      setToken(accessToken);

      setIsAuthenticated(true);
      if (accessToken) {
        if(email =="admin@yopmail.com"){
        history.push("/admin")
        }else{
        history.push("/user");
      }
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };

  // Register => Cambiaré a true mi estado
  const signUp = async ({
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
  }) => {
    try {
      await register({
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
      });
      ;
      window.alert("Su registro a sido un exito");
      history.push("/");
    } catch (error) {
      return Promise.reject(error);
    }
  };

  // Logout => Cambiaré a false mi estado
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("currentUser");
  };

  // 2.3) Devolvemos el Context
  // Si usara roles puedo devolver el role actual del usuario en lugar de isAuthenticated
  // return (
  //   <AuthContext.Provider
  //     value={{ role, setRole, signIn, user }}
  //   >
  //     {children}
  //   </AuthContext.Provider>
  // );
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        singIN,
        user,
        token,
        signUp,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// 3) Crear el custom hook
// Es lo que usaré en los componentes para acceder al value del contexto
export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
