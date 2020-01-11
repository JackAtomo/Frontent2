function calcularPrecio() {
    let edad = document.getElementById("edad").value;
    let pais = document.getElementById("pais").value;
    let sexo = document.getElementById("sexo").value;
    let incremento = 0;
    let basico = 10;
    let reforzado = 20;
    let premium = 30;
    if (edad == 50 || edad < 30) {
      incremento = incremento + 16.66;
    }
    if (pais !== "España") {
      incremento = incremento + 33.33;
    }
    if (sexo === "Hombre") {
      incremento = incremento + 33.33;
    }
    incremento = (incremento + 100) / 100;
    basico = Math.round(basico * incremento * 100) / 100;
    reforzado = Math.round(reforzado * incremento * 100) / 100;
    premium = Math.round(premium * incremento * 100) / 100;
    document.getElementById("result1").value = basico + "€";
    document.getElementById("result2").value = reforzado + "€";
    document.getElementById("result3").value = premium + "€";
  
    return "false";
  }
  export {calcularPrecio}