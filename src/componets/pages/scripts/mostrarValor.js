function mostrarValor() {
    let edad = document.getElementById("edad").value;
    let label = document.getElementById("label");
    if (edad == 50) {
      label.innerHTML = `Rango de edad: +${edad}`;
    } else {
      label.innerHTML = `Rango de edad: ${edad}`;
    }
    return "false";
  }
  export {mostrarValor}