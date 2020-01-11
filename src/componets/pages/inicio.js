import React, { componets } from "react";
function Inicio() {
  return (
    <React.Fragment>
      <section id="productos">
        <div class="producto">
          <a href="/consultar" class="center">
            <img src="images/opcion1.jpg" alt="Seguro 1" />
            <label class="encima">Basico</label>
          </a>
          <ul>
            <li>
              Cuidados expertos en domicilio en caso de accidente con copago.
            </li>
            <li>
              Asesoramiento para la adaptación de la vivienda a la nueva
              situación.
            </li>
            <li>
              Alquiler a precio reducido del material provisional necesario
              (cama articulada, grúa, silla de ruedas...).
            </li>
          </ul>
        </div>
        <div class="producto">
          <a href="/consultar" class="center">
            <img src="images/opcion2.png" alt="Seguro 2" />
            <label class="encima">Reforzado</label>
          </a>
          <ul>
            <li>
              Cuidados expertos en domicilio en caso de accidente con copago
              bajo.
            </li>
            <li>
              Asesoramiento para la adaptación de la vivienda a la nueva
              situación.
            </li>
            <li>
              Alquiler a precio reducido del material provisional necesario
              (cama articulada, grúa, silla de ruedas...).
            </li>
          </ul>
        </div>
        <div class="producto">
          <a href="/consultar" class="center">
            <img src="images/opcion3.jpg" alt="Seguro 3" />
            <label class="encima">Premium</label>
          </a>
          <ul>
            <li>
              Cuidados expertos en domicilio en caso de accidente sin copago.
            </li>
            <li>
              Asesoramiento para la adaptación de la vivienda a la nueva
              situación.
            </li>
            <li>
              Alquiler gratuito del material provisional necesario (cama
              articulada, grúa, silla de ruedas...).
            </li>
          </ul>
        </div>
      </section>
    </React.Fragment>
  );
}
export default Inicio;
