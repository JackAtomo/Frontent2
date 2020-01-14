import React from "react"

function User() {
    return (
      <React.Fragment>
        <section id="user">
          <span id="datos">
            <h1>Mis Datos:</h1>
            <fieldset>
              <h2 id="name">Diego</h2>
              <h3 id="apellidos">Cernadas Sexto</h3>
            </fieldset>
            <fieldset>
              <label>Email:</label>
              <label id="email">diego-cernadas-sexto@hotmail.com</label>
            </fieldset>
            <fieldset>
              <label>Genero:</label>
              <label>Hombre</label>
            </fieldset>
            <fieldset>
              <label>Direccion:</label>
              <label>Rua Pazon Nº29</label>
            </fieldset>
            <fieldset>
              <label>Fecha de nacimiento:</label>
              <label>03/10/1999</label>>
            </fieldset>
            <fieldset>
              <label>Born IN:</label>
              <label>España</label>
            </fieldset>
            <fieldset>
              <label>Codigo Postal:</label>
              <label>15185</label>
            </fieldset>
          </span>
          <sapn id="solicitud">
            <h1>Solicitar asistencia:</h1>
            <fieldset>
              <h2>Titulo:</h2>
              <input type="text" id="title" />
            </fieldset>
            <fieldset>
              <h3>Descripcion</h3>
              <textarea id="description" />
            </fieldset>
            <fieldset>
              <h3>Precio Estimado</h3>
              <input type="number" />
            </fieldset>
          </sapn>
          <sapn id="acciones">
            <h1>Acciones</h1>
            <fieldset>
              <button>Cambiar Datos</button>
              <button>Contratar Seguro</button>
              <button>Cerrar Sesión</button>
            </fieldset>
            <fieldset>
              <button id="danger">Cancelar Cuenta</button>
            </fieldset>
          </sapn>
        </section>
      </React.Fragment>
    );
  }


export default User;