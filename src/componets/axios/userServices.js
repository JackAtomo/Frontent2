import axios from "axios";
import { useAuth } from "../commons/auth/auth-context";


export function getDatos(token) {
  axios.defaults.headers.common['Authorization'] = {Bearer:token};

  return axios.get(`https://be-seguros-subir.herokuapp.com/api/accounts`,{
  });
}

export function updateDatos(token,datos) {
  
  //return axios.put(`${process.env.REACT_APP_BACKEND_URL}/notes/${note.id}`,
    //datos
  //);
}

export function buySeguro(token,id_seguro,precio) {
  //return axios.post(`${process.env.REACT_APP_BACKEND_URL}/notes`, note);
}
export function solicitarAsistencia(token,asistencia,precio) {
    //return axios.post(`${process.env.REACT_APP_BACKEND_URL}/notes`, note);
  }


export function deleteAcount(token) {
  //return axios.delete(`${process.env.REACT_APP_BACKEND_URL}//${noteId}`);
}