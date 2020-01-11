import axios from "axios";

export function login(email, password) {
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/logins `, null, {
    email: email,
    pasword: password
  });
}
