// componente card para mostrar elementos en el inicio, mostrará el icono, nombre, cantidad y ruta
import React from "react";
import { NavLink } from "react-router-dom";

const CardObjetos = ({ icono, nombre, cantidad, ruta }) => {
  return (
    // estructura de la card
    <div className="card card-espaciada">
      <div className="card-body">
        {/*
                Titulo y contenido de la card
                */}
        <div className="d-flex align-items-center">
          {/*
                    Icono de la card
                    */}
          <div className="me-3 grow">
            <span>{icono}</span>
          </div>
          {/*
                    Nombre, cantidad y boton de la card
                    */}
          <div>
            <h5 className="card-title titulo">
              <b>{nombre}</b>
            </h5>
            <p className="card-text">
              Cantidad: <b>{cantidad}</b>
            </p>
            <NavLink to={ruta} className="btn btn-success">
              Ir a {nombre}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardObjetos;
