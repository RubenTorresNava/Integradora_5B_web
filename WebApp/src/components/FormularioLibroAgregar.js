// con los siguientes datos: clasificacion, cantidad, titulo, autor, editorial, apartado, idLibro(solo perimitir 14 caracteres)
import React, { useState } from "react";
import Swal from "sweetalert2";
import { crearLibro } from "../api/api";

const FormularioLibroAgregar = () => {
  // estado para guardar los datos del libro
  const [datosLibro, setDatosLibro] = useState({
    clasificacion: "",
    cantidad: "",
    titulo: "",
    autor: "",
    editorial: "",
    apartado: "",
    idLibro: "",
  });
  // funcion para cambiar los valores de los campos
  const handleChange = (e) => {
    setDatosLibro({
      ...datosLibro,
      [e.target.name]: e.target.value,
    });
  };
  // funcion para enviar los datos del libro
  const handleSubmit = async (e) => {
    // evita que se recargue la pagina
    e.preventDefault();

    try {
      // Crear un nuevo objeto con los nombres de campos esperados por el backend
      const libroParaEnviar = {
        clasificacion: datosLibro.clasificacion,
        cantidad: datosLibro.cantidad,
        titulo: datosLibro.titulo,
        autor: datosLibro.autor,
        editorial: datosLibro.editorial,
        apartado: datosLibro.apartado,
        idLibro: datosLibro.idLibro,
      };

      // Envía los datos del nuevo libro al servidor
      await crearLibro(libroParaEnviar);

      // Muestra una alerta de éxito
      Swal.fire({
        icon: "success",
        title: "Libro agregado",
        showConfirmButton: false,
        timer: 1000,
      });
      // Limpia los campos del formulario
      setDatosLibro({
        clasificacion: "",
        cantidad: "",
        titulo: "",
        autor: "",
        editorial: "",
        apartado: "",
        idLibro: "",
      });
    } catch (error) {
      // Muestra una alerta de error
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response.data,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Clasificación</label>
        <input
          type="text"
          name="clasificacion"
          className="form-control"
          value={datosLibro.clasificacion}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Cantidad</label>
        <input
          type="number"
          name="cantidad"
          className="form-control"
          value={datosLibro.cantidad}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Título</label>
        <input
          type="text"
          name="titulo"
          className="form-control"
          value={datosLibro.titulo}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Autor</label>
        <input
          type="text"
          name="autor"
          className="form-control"
          value={datosLibro.autor}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Editorial</label>
        <input
          type="text"
          name="editorial"
          className="form-control"
          value={datosLibro.editorial}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Apartado</label>
        <input
          type="text"
          name="apartado"
          className="form-control"
          value={datosLibro.apartado}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Id Libro</label>
        <input
          type="text"
          name="idLibro"
          maxLength="14"
          className="form-control"
          value={datosLibro.idLibro}
          onChange={handleChange}
          required
        />
      </div>
      <br />
      <div className="d-flex justify-content-between">
        {/* <button type="submit" className="btn btn-primary">
          Agregar
        </button> */}
        {/* habilitar solo hast que los campos esten llenos */}
        <button
          type="submit"
          className="btn btn-success"
          disabled={
            !datosLibro.clasificacion ||
            !datosLibro.cantidad ||
            !datosLibro.titulo ||
            !datosLibro.autor ||
            !datosLibro.editorial ||
            !datosLibro.apartado ||
            !datosLibro.idLibro
          }
        >
          Agregar
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() =>
            setDatosLibro({
              clasificacion: "",
              cantidad: "",
              titulo: "",
              autor: "",
              editorial: "",
              apartado: "",
              idLibro: "",
            })
          }
        >
          Limpiar
        </button>
      </div>
    </form>
  );
};

export default FormularioLibroAgregar;
