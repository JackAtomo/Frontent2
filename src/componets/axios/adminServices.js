
import axios from "axios";

export function getService(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return axios.get(`https://be-seguros-subir.herokuapp.com/api/admin/serviceszero`,{
    });
    
  }
  