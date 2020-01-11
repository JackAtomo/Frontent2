import axios from "axios";

export function register({
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
})
{
  console.log("va");
  let role="1";
  console.log(firstName,
    lastName,
    email,
    password,
    gender,
    dob,
    address,
    postalCode,
    phone,
    bornIn);
return axios.post(`http://localhost:8000/api/accounts`, {
  firstName: firstName,
  lastName: lastName,
  email: email,
  password: password,
    gender: gender,
    DOB: dob,
    address: address,
    postalCode: postalCode,
    phone: phone,
    bornIn: bornIn,
    userStatus: role
  });
}
