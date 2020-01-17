
import axios from "axios";

export function getService(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return axios.get(`https://be-seguros-subir.herokuapp.com/api/admin/serviceszero`,{
    });
    
  }

export function aceptarsolicicitud(token,id){
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  return axios.put(`https://be-seguros-subir.herokuapp.com/api/admin/services/${id}`,{
    "requestState": "1"
  });
 
}

export function rechazarsolicitud(token,id){
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  return axios.put(`https://be-seguros-subir.herokuapp.com/api/admin/services/${id}`,{
    "requestState": "2"
  });
 
}
