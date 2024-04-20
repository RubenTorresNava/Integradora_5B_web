// componente para crear un préstamo de un libro a un alumno
import React, { useState } from "react";
import Swal from "sweetalert2";
import { crearPrestamo } from "../api/api";

const FormularioPrestamoAlumno = () => {
  // estado para guardar los datos del alumno
  const [datosAlumno, setDatosAlumno] = useState({
    numeroControl: "",
    idLibro: "",
  });
  // funcion para cambiar los valores de los campos
  const handleChange = (e) => {
    setDatosAlumno({
      ...datosAlumno,
      [e.target.name]: e.target.value,
    });
  };
  // funcion para enviar los datos del alumno
  const handleSubmit = async (e) => {
    // evita que se recargue la pagina
    e.preventDefault();
    // intenta crear un préstamo
    try {
      // envía los datos del nuevo préstamo al servidor
      await crearPrestamo({
        idLibro: datosAlumno.idLibro,
        noCtrl: datosAlumno.numeroControl,
      });
      // muestra una alerta de éxito
      Swal.fire({
        icon: "success",
        title: "Prestamo agregado",
        showConfirmButton: false,
        timer: 1900,
      });
      // limpia los campos del formulario
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      // si hay un error, muestra una alerta de error
      console.error("Error al crear el préstamo:", error);
      // muestra una alerta de error
      Swal.fire({
        icon: "error",
        title: "Error al crear el préstamo",
        text: "Por favor, inténtalo de nuevo más tarde.",
        showConfirmButton: false,
        timer: 1900,
      });
    }
  };

  return (
    // estructura del formulario
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col">
          <input
            required
            type="text"
            name="numeroControl"
            className="form-control mb-3"
            placeholder="Número de Control"
            value={datosAlumno.numeroControl}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <input
            required
            type="text"
            name="idLibro"
            className="form-control mb-3"
            placeholder="identificador del libro"
            value={datosAlumno.idLibro}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="d-grid gap-2">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button
            type="submit"
            className="btn btn-success"
            disabled={!datosAlumno.numeroControl || !datosAlumno.idLibro}
          >
            Crear Préstamo
          </button> 
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setDatosAlumno({
                numeroControl: "",
                idLibro: "",
              });
            }}
          >
            Limpiar
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormularioPrestamoAlumno;
