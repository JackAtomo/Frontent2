export const REGISTER_VALIDATIONS = {
    firstName: {
  required:"",
},
lastName:{
    required:"",
},
phone:{
    required:"",
},
dob:{
    required:"",
},
gender:{
    required:"",
},
email: {
  required:"",
  pattern: {
    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  }
},
password: {
  required:"",
  minLength: {
    value: 6
  }
},
address:{
    required:"",
},
postalCode:{
    required:"",
},
bornIn:{
    required:"",
}

};

export const SINGIN_VALIDATIONS = {

email: {
required:"EL email no es valido",
pattern: {
  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}
},
password: {
required:"La longitud minima es de 6 ",
minLength: {
  value: 6
}
},

};