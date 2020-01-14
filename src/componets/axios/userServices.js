import axios from "axios";

export function getDatos(token) {
  //return axios.get(`${process.env.REACT_APP_BACKEND_URL}/notes`);
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