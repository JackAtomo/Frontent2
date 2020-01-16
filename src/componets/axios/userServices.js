import axios from "axios";
import { useAuth } from "../commons/auth/auth-context";


export function getDatos(token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  return axios.get(`https://be-seguros-subir.herokuapp.com/api/accounts`,{
  });
  
}

export function updateDatos(token,datos) {
  
  //return axios.put(`${process.env.REACT_APP_BACKEND_URL}/notes/${note.id}`,
    //datos
  //);
}

export function buySeguro(token,type,precio) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  precio=Number.parseFloat(precio).toFixed(2);
  return axios.post(`https://be-seguros-subir.herokuapp.com/api/insurances`,{
    'policyType':type,
    'policyPrice': precio,
  });
}
export function solicitarAsistencia(token,asistencia,precio) {
    //return axios.post(`${process.env.REACT_APP_BACKEND_URL}/notes`, note);
  }

  export function getPolices(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return axios.get(`https://be-seguros-subir.herokuapp.com/api/insurances`);
  }


export function deleteAcount(token) {
  console.log("va")
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  return axios.delete(`https://be-seguros-subir.herokuapp.com/api/accounts`);
}