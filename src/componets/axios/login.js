import axios from "axios";
/*
export function login(email, password) {
  return axios.post(`https://be-seguros-subir.herokuapp.com/api/logins`, null {
    "email" : email,
    "pasword" : password
  });
}
*/

export function login(email, password) {
  console.log(email,password);

  return axios.post(`https://be-seguros-subir.herokuapp.com/api/logins`, {
      email: email,
      password: password,
  });
}
