// pagina del formulario para agregar un alumno
import React from "react";
import FormularioAlumnoAgregar from "../../src/components/FormularioAlumnoAgregar";

const AlumnoAgregar = () => {
  return (
    <div className="contenedor">
      <h2 className="titulo">
        <b>Agregar Alumno</b>
      </h2>
      <hr />
      <FormularioAlumnoAgregar />
    </div>
  );
};

export default AlumnoAgregar;
