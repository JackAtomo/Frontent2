import React from "react";
import  {mostrarValor} from "./scripts/mostrarValor";
import { calcularPrecio } from "./scripts/calcularPrecio";
function Consultar() {
  return (
    <React.Fragment>
      <section id="form_consultar" onChange={calcularPrecio}>
        <fieldset className="grupo">
        <label htmlFor="cod_postal">Codigo Postal</label>
          <input type="text" id="cod_postal" />
          <label id="label" htmlFor="edad">
            Rango de edad:
          </label>
          <input
            type="range"
            list="year"
            id="edad"
            step="5"
            min="10"
            max="50"
            onChange={mostrarValor}
          />
          <datalist id="year">
            <option value="10" />
            <option value="15" />
            <option value="20" />
            <option value="25" />
            <option value="30" />
            <option value="35" />
            <option value="40" />
            <option value="45" />
            <option value="50" />
          </datalist>
        
          
          </fieldset>
        <fieldset className="grupo">
          <label htmlFor="pais">Lugar de nacimiento</label>
          <select id="pais">
            <option>España</option>
            <option>Otro</option>
          </select>
          <label htmlFor="sexo">Sexo</label>
          <select id="sexo">
            <option>Mujer</option>
            <option>Hombre</option>
          </select>
        </fieldset>
      </section>
      <section id="resultado">
        <div>
        <fieldset>
          <label>Seguro basico</label>
          <input id="result1" value="10€" />
        </fieldset>
        <fieldset>
          <label>Seguro Reforzado</label>
          <input id="result2" value="20€" />
        </fieldset>
        <fieldset>
          <label>Seguro Premium</label>
          <input id="result3" value="30€" />
        </fieldset>
        </div>
        <div>
          <a href="/registrarse">
          <button>
           Registrate para contratar
          </button>
          </a>
        </div>
      </section>
    </React.Fragment>
  );
}



export { Consultar };
