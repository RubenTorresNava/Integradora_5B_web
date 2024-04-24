// componente card que mostrara la informacion de los prestamos habidos
import Swal from "sweetalert2";
import { devolverPrestamo } from "../api/api";
import React from "react";
import BotonEditarPrestamoModal from "./BotonEditarPrestamoModal";

const CardPrestamo = ({ idPrestamo, fechaPrestamo, fechaEntrega, estado }) => {
  // funcion para devolver el prestamo
  const handleClick = async () => {
    try {
      // se envia el id del prestamo para devolverlo
      const response = await devolverPrestamo({ idPrestamo });
      const data = response.data;
      console.log(data);
      // se muestra un mensaje de exito
      Swal.fire({
        icon: "success",
        title: "Prestamo devuelto",
        showConfirmButton: false,
        timer: 1500,
      });
      // se recarga la pagina
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      // se muestra un mensaje de error
      console.error(
        "Error al devolver el prestamo. Inténtalo de nuevo más tarde."
      );
      Swal.fire({
        icon: "error",
        title: "Error al devolver el prestamo. Inténtalo de nuevo más tarde.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  // estructura de la card
  return (
    <div className="card">
      {/*
            Imagen de la card
            */}
      <div className="card-body">
        {/*
                Titulo y contenido de la card con la base de datos
                */}
        <h5 className="card-title titulo">
          <b>{idPrestamo}</b>
        </h5>
        <p className="card-text">
          Fecha de prestamo: <b>{fechaPrestamo}</b>
        </p>
        <p className="card-text">
          Fecha de devolucion: <b>{fechaEntrega}</b>
        </p>
        {/* contenedor para los botones separados */}
        <div className="d-flex justify-content-between">
          <button
            
            className={`btn ${
              estado === "Devuelto" ? "btn-secondary" : "btn-success"
            }`}
            onClick={handleClick}
            disabled={estado === "Devuelto"}
            title="Estado del Prestamo"
          >
            {estado === "Devuelto" ? "Terminado" : "Terminar préstamo"}
          </button>
          {estado !== "Devuelto" && (
            <BotonEditarPrestamoModal
              idPrestamo={idPrestamo}
              fechaPrestamo={fechaPrestamo}
              fechaEntrega={fechaEntrega}
              estado={estado}
            />
          )}
        </div>
        <input type="hidden" value={idPrestamo} />
      </div>
    </div>
  );
};

export default CardPrestamo;
